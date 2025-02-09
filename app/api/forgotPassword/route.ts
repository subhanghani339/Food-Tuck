// app/api/forgotPassword/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON body
    const { email } = await request.json();

    // Basic validation (you can expand this as needed)
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Invalid email provided." },
        { status: 400 }
      );
    }

    // TODO: Implement your forgot password logic here, e.g., generating a token and sending an email
    console.log("Forgot password request for:", email);

    // Return a success response
    return NextResponse.json({
      message: "Reset password link has been sent to your email.",
    });
  } catch (error) {
    console.error("Error in forgotPassword API:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
