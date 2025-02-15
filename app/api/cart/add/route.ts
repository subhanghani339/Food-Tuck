import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { getUserSession } from "@/app/lib/auth"; // Function to get logged-in user

export async function POST(req: Request) {
  try {
    const user = await getUserSession(req);
    if (!user) {
      return NextResponse.json({ error: "Please login to add product to cart!" }, { status: 401 });
    }

    const { productId, name, price, quantity, image } = await req.json();

    // Check if the user already has a cart
    const existingCart = await client.fetch(
      `*[_type == "cart" && userId == $userId][0]`,
      { userId: user.email }
    );

    if (existingCart) {
      // Update existing cart: Add product or update quantity
      const updatedItems = [...existingCart.items];
      const productIndex = updatedItems.findIndex(
        (item) => item.productId === productId
      );

      if (productIndex !== -1) {
        updatedItems[productIndex].quantity += quantity;
      } else {
        updatedItems.push({ productId, name, price, quantity, image });
      }

      await client
        .patch(existingCart._id)
        .set({ items: updatedItems })
        .commit();
    } else {
      // Create new cart for the user
      await client.create({
        _type: "cart",
        userId: user.email,
        items: [{ productId, name, price, quantity, image }],
      });
    }

    return NextResponse.json({ success: true, message: "Added to cart" });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to add to cart" },
      { status: 500 }
    );
  }
}
