import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { client } from "@/sanity/lib/client";
import bcrypt from "bcryptjs";

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

        if (!email) {
          throw new Error("Email is required");
        }

        if (!password) {
          throw new Error("Password is required");
        }

        // Fetch the user from your database
        const user = await client.fetch(
          `*[_type == "user" && email == $email][0]`,
          { email }
        );

        if (user) {
          const isPasswordValid = await bcrypt.compare(password, user.password);

          if (isPasswordValid) {
            return { id: user._id, email: user.email, name: user.name };
          } else {
            throw new Error("Invalid password");
          }
        } else {
          throw new Error("User not found");
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        // Check if user exists in your database
        const existingUser = await client.fetch(
          `*[_type == "user" && email == $email][0]`,
          { email: user.email }
        );

        if (!existingUser) {
          // Add the Google user to the database
          await client.create({
            _type: "user",
            name: user.name,
            email: user.email,
            password: "", // Optional: Leave blank since this is a Google user
          });
        }
      }
      return true; // Allow the sign-in
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Optional: a secret to encrypt session data
});

export { handler as GET, handler as POST };
