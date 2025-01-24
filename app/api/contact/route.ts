import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message?: string;
}

export async function POST(req: Request) {
  try {
    const data: ContactFormData = await req.json();

    const { firstName, lastName, email, message } = data;

    if (!firstName) {
      return NextResponse.json(
        {
          error: "First Name is required",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    if (!lastName) {
      return NextResponse.json(
        {
          error: "Last Name is required",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    if (!email) {
      return NextResponse.json(
        {
          error: "Email is required",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    const result = await client.create({
      _type: "contact",
      firstName,
      lastName,
      email,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contact Form Submitted Successfully!",
        data: result,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit the contact form",
      },
      { status: 500 }
    );
  }
}
