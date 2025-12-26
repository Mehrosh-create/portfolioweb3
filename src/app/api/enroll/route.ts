import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, phone, message, programId } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_FROM,
            subject: `New Enrollment Request - Program ${programId}`,
            text: `
    Name: ${name}
    Email: ${email}
    Phone: ${phone || "N/A"}
    Program ID: ${programId}
    Message: ${message}
  `,
            html: `
    <h2>New Enrollment Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "N/A"}</p>
    <p><strong>Program ID:</strong> ${programId}</p>
    <p><strong>Message:</strong> ${message}</p>
  `,
        });

        return NextResponse.json({ success: true });
    } catch (error: unknown) {
        console.error("Enrollment email error:", error);
        const message =
            error instanceof Error ? error.message : "Failed to send enrollment request.";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
