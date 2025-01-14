// middleware.ts (or middleware.js in older setups)
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"; // getToken to access NextAuth session

// Define the paths you want to restrict access to
const restrictedPaths = ["/signin", "/signup"];

export async function middleware(req: NextRequest) {

  // Get the user session token
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If the user is authenticated (has a valid session), and trying to access login/register pages
  if (
    token &&
    restrictedPaths.some((path) => req.nextUrl.pathname.startsWith(path))
  ) {
    // Redirect the user to the dashboard or home page (can be customized)
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If the user is not authenticated or not trying to access restricted pages, allow the request
  return NextResponse.next();
}

// Optionally, you can specify paths to apply this middleware to
export const config = {
  matcher: ["/signin", "/signup"], // Apply the middleware to login and register routes
};
