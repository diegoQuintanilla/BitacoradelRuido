import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido",
    });
  }

  const { nombre, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios.",
    });
  }

  try {
    await resend.emails.send({
      from: "La Bitácora del Ruido <onboarding@resend.dev>",

      to: "dieguitoquinta@gmail.com",

      subject: `Nuevo mensaje de ${nombre}`,

      html: `
      <div style="font-family:Arial,sans-serif;padding:30px">

        <h2>Nuevo mensaje desde La Bitácora del Ruido</h2>

        <hr>

        <p><strong>Nombre:</strong> ${nombre}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Mensaje:</strong></p>

        <div style="
          background:#f4f4f4;
          padding:20px;
          border-radius:10px;
        ">
          ${mensaje}
        </div>

      </div>
      `,
    });

    return res.status(200).json({
      success: true,
    });

  } catch (error) {
  console.error("===== ERROR RESEND =====");
  console.error(error);

  return res.status(500).json({
    success: false,
    message: error.message,
    stack: error.stack,
  });
}
}
