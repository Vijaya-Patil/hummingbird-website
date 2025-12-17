import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const position = formData.get("position");
    const resume = formData.get("resume");

    console.log("Career form received:", name, email, resume?.name);

    // VALIDATION
    if (!name || !email || !resume || resume.size === 0) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // FILE SIZE LIMIT (5MB)
    if (resume.size > 5 * 1024 * 1024) {
      return Response.json(
        { success: false, message: "Resume file too large (max 5MB)" },
        { status: 400 }
      );
    }

    // FILE TYPE CHECK
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(resume.type)) {
      return Response.json(
        { success: false, message: "Invalid resume file type" },
        { status: 400 }
      );
    }

    // CONVERT FILE
    const buffer = Buffer.from(await resume.arrayBuffer());

    // SMTP TRANSPORT
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // SEND MAIL
    await transporter.sendMail({
      from: `"Careers | Hummingbird Tek Systems" <${process.env.SMTP_USER}>`,
      to: "hr@hummingbird-tek.com",
      subject: `New Career Application – ${name}`,
      html: `
        <h3>New Career Application</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Position:</strong> ${position || "Not specified"}</p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("SMTP ERROR:", error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
