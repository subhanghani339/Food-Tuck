// lib/cart.ts

export interface Product {
    id: number | string;
    name: string;
    shortDescription: string;
    originalPrice: number;
    discountedPrice: number | null;
    inStock: boolean;
    featuredImage: string;
    averageRatings: number;
    totalRatings: number;
    latest: boolean;
  }
  
  export interface CartPayload {
    productId: number | string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }
  
  /**
   * Global function to add a product to the cart.
   * This function calls the /api/cart/add endpoint.
   */
  export async function addToCart(product: Product, quantity = 1): Promise<any> {
    // Create the payload using the product info
    const payload: CartPayload = {
      productId: product.id,
      name: product.name,
      // Use discountedPrice if available, otherwise originalPrice
      price: product.discountedPrice ?? product.originalPrice,
      quantity,
      image: product.featuredImage,
    };
  
    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Failed to add item to cart.");
      }
  
      return data;
    } catch (error) {
      console.log("Add to cart error:", error);
      throw error;
    }
  }
  