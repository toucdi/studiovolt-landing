"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !phone || !company || !message) {
        return { error: "Tutti i campi sono obbligatori." };
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
        await transporter.sendMail({
            from: `"Studio Volt" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_RECIPIENT,
            subject: `Nuovo Messaggio da ${name} - Studio Volt`,
            text: `Nome: ${name}\nEmail: ${email}\nTelefono: ${phone}\nAzienda / Studio: ${company}\n\nMessaggio:\n${message}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #000;">Nuovo Messaggio di Contatto</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefono:</strong> ${phone}</p>
          <p><strong>Azienda / Studio:</strong> ${company}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Messaggio:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        });

        // Optional: Send confirmation to the user
        await transporter.sendMail({
            from: `"Studio Volt" <${process.env.SMTP_USER}>`,
            to: email,
            subject: `Ricevuto: Messaggio per Studio Volt`,
            text: `Ciao ${name},\n\nAbbiamo ricevuto il tuo messaggio. Ti risponderemo entro 24 ore.\n\nCordiali saluti,\nStudio Volt`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #000;">Studio Volt</h2>
          <p>Ciao ${name},</p>
          <p>Abbiamo ricevuto la tua richiesta e ti risponderemo il prima possibile (solitamente entro 24 ore).</p>
          <p>Grazie per averci contattato.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #999;">© 2026 Studio Volt</p>
        </div>
      `,
        });

        return { success: true };
    } catch (error) {
        console.error("SMTP error:", error);
        return { error: "Si è verificato un errore durante l'invio dell'email. Riprova più tardi." };
    }
}
