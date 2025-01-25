// app/api/auth/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client'; // Ensure the import path is correct
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json(); // Extract the data from the request body

    console.log("Registering user...", email);

    if(!name){
      return NextResponse.json({
        message: 'Name is required',
        success: false,
      }, {
        status: 400
      })
    }

    if(!password){
      return NextResponse.json({
        message: 'Password is required',
        success: false,
      }, {
        status: 400
      })
    }

    if(!email){
      return NextResponse.json({
        message: 'Email is required',
        success: false,
      }, {
        status: 400
      })
    }

    // Check if user exists
    const existingUser = await client.fetch(`
      *[_type == "user" && email == $email][0]`, { email });

    if (existingUser) {
      return NextResponse.json({ error: 'User already exists.' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user document in Sanity
    const newUser = await client.create({
      _type: 'user',
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ user: newUser }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error creating user.' }, { status: 500 });
  }
}
