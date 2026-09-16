"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const message = formData.get("message") as string;
    const locale = formData.get("locale") as string || "it";

    if (!name || !email || !phone || !company || !message) {
        return { error: locale === "en" ? "All fields are required." : "Tutti i campi sono obbligatori." };
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: true, // true for port 465
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        // Send email to the configured recipient
        const isEnglish = locale === "en";
        const subjectPrefix = isEnglish ? "EN Inquiry" : "Nuovo Messaggio";
        const nameLabel = isEnglish ? "Name" : "Nome";
        const phoneLabel = isEnglish ? "Phone" : "Telefono";
        const companyLabel = isEnglish ? "Company / Practice" : "Azienda / Studio";
        const messageLabel = isEnglish ? "Message" : "Messaggio";
        const contactTitle = isEnglish ? "New Contact Inquiry" : "Nuovo Messaggio di Contatto";

        await transporter.sendMail({
            from: `"Studio Volt" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_RECIPIENT,
            subject: `${subjectPrefix} from ${name} - Studio Volt`,
            text: `${nameLabel}: ${name}\nEmail: ${email}\n${phoneLabel}: ${phone}\n${companyLabel}: ${company}\n\n${messageLabel}:\n${message}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #000;">${contactTitle}</h2>
          <p><strong>${nameLabel}:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>${phoneLabel}:</strong> ${phone}</p>
          <p><strong>${companyLabel}:</strong> ${company}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>${messageLabel}:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        });

        // Optional: Send confirmation to the user
        const confirmSubject = isEnglish ? "Received: Message for Studio Volt" : "Ricevuto: Messaggio per Studio Volt";
        const greeting = isEnglish ? `Hello ${name},` : `Ciao ${name},`;
        const confirmMessage = isEnglish 
            ? "We have received your inquiry and will respond as soon as possible (usually within 24 hours)."
            : "Abbiamo ricevuto la tua richiesta e ti risponderemo il prima possibile (solitamente entro 24 ore).";
        const thanks = isEnglish ? "Thank you for contacting us." : "Grazie per averci contattato.";

        await transporter.sendMail({
            from: `"Studio Volt" <${process.env.SMTP_USER}>`,
            to: email,
            subject: confirmSubject,
            text: `${greeting}\n\n${confirmMessage}\n\n${thanks}\n\nStudio Volt`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #000;">Studio Volt</h2>
          <p>${greeting}</p>
          <p>${confirmMessage}</p>
          <p>${thanks}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #999;">© 2026 Studio Volt</p>
        </div>
      `,
        });

        return { success: true };
    } catch (error) {
        console.error("SMTP error:", error);
        const errorMessage = locale === "en" 
            ? "An error occurred while sending the email. Please try again later."
            : "Si è verificato un errore durante l'invio dell'email. Riprova più tardi.";
        return { error: errorMessage };
    }
}
