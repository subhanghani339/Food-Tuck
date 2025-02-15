// app/api/cart/remove/route.ts
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { getUserSession } from "@/app/lib/auth"; // Helper to get logged-in user

export async function POST(req: Request) {
  try {
    // Get logged in user session
    const user = await getUserSession(req);
    if (!user || !user.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get productId from request payload
    const { productId } = await req.json();

    // Fetch the user's cart from Sanity
    const cart = await client.fetch(
      `*[_type == "cart" && userId == $userId][0]`,
      { userId: user.email }
    );

    if (!cart) {
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });
    }

    // Remove the product from the items array by filtering it out
    const updatedItems = cart.items.filter(
      (item: any) => String(item.productId) !== String(productId)
    );

    // Update the cart document with the new items list
    await client.patch(cart._id).set({ items: updatedItems }).commit();

    return NextResponse.json({
      success: true,
      message: "Product removed from cart",
    });
  } catch (error) {
    console.error("Error removing product from cart:", error);
    return NextResponse.json(
      { error: "Failed to remove product from cart" },
      { status: 500 }
    );
  }
}
