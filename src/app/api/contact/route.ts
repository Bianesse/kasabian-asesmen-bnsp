import { NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/lib/db"; // prisma client

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Simpan ke database
    await prisma.contact.create({
      data: { name, email, subject, message },
    });

    // Kirim email pakai Resend
    await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: "ibrahimkasabian@gmail.com", // email admin (atau bisa array)
      subject: `Pesan Baru: ${subject}`,
      html: `
        <h2>Pesan Baru dari Website</h2>
        <p><b>Nama:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subjek:</b> ${subject}</p>
        <p><b>Pesan:</b></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to save message & send email" },
      { status: 500 }
    );
  }
}
