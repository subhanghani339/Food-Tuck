// app/api/auth/[...nextauth]/route.js

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,  // Your Google client ID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,  // Your Google client secret
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,  // Optional: a secret to encrypt session data
});

export { handler as GET, handler as POST };
