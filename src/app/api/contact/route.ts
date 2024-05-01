import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

interface ContactContent {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message }: ContactContent =
      await req.json();

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json({
        status: 400,
        message: "All fields are required",
      });
    }

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        subject,
        message,
      },
    });

    if (contact) {
      const response = await fetch(
        "https://mail-service-1omd.onrender.com/api/mrgrace/sub",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: contact.email,
            name: contact.name,
          }),
        }
      );

      if (!response.ok) {
        return NextResponse.json({
          status: 402,
          message: "Something went wrong",
        });
      }
    }

    return NextResponse.json({
      status: 200,
      data: contact,
      message: "Contact created successfully",
    });
  } catch (error: any) {
    console.error("Error creating contact:", error);
    return NextResponse.json({
      status: 500,
      message: "Something went wrong",
    });
  }
}
