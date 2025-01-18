// app/api/auth/[...nextauth]/route.js

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { client } from "@/sanity/lib/client";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID, // Your Google client ID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Your Google client secret
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // Fetch the user from your database (Sanity, MongoDB, etc.)
        const user = await client.fetch(
          `*[_type == "user" && email == $email][0]`,
          { email }
        );

        if (user) {
          // You can verify the password here (if hashed)
          const bcrypt = require("bcryptjs");
          const isPasswordValid = await bcrypt.compare(password, user.password);

          if (isPasswordValid) {
            // If the password matches, return the user object
            return { id: user._id, email: user.email, name: user.name };
          } else {
            // If password doesn't match, return null
            throw new Error("Password is invalid");
          }
        } else {
          // Return null if the user doesn't exist
          throw new Error("User not found");
        }
        return null; // Return null if user doesn't exist
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Optional: a secret to encrypt session data
});

export { handler as GET, handler as POST };
