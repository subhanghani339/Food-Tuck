
// app/api/cart/get/route.ts
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { getUserSession } from "@/app/lib/auth"; // Your helper using getServerSession

export async function GET(req: Request) {
  try {
    // Retrieve the user session from NextAuth
    const user = await getUserSession(req);
    
    if (!user || !user.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Fetch the cart document for the logged in user using the Sanity _id
    const cart = await client.fetch(
      `*[_type == "cart" && userId == $userId][0]`,
      { userId: user.email }
    );

    // If no cart is found, return an empty cart (or you can choose to return null)
    if (!cart) {
      return NextResponse.json({ success: true, cart: [] });
    }

    // Return the items from the cart
    return NextResponse.json({ success: true, cart: cart.items });
  } catch (error) {
    console.error("Get Cart API error:", error);
    return NextResponse.json(
      { error: "Failed to get cart" },
      { status: 500 }
    );
  }
}
