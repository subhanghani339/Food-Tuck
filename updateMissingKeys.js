import { client } from "@/sanity/lib/client";

async function deleteAllCarts() {
  try {
    // Fetch all cart documents
    const carts = await client.fetch('*[_type == "cart"]');

    // Delete each cart document
    for (const cart of carts) {
      await client.delete(cart._id);
      console.log(`Deleted cart with ID: ${cart._id}`);
    }

    console.log("All carts deleted successfully.");
  } catch (error) {
    console.error("Error deleting carts:", error);
  }
}

deleteAllCarts();
