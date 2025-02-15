"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";

async function handleRemove(productId: string | number) {
  try {
    const response = await fetch("/api/cart/remove", {
      method: "POST", // or 'DELETE' if your endpoint was set up for DELETE
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });

    const data = await response.json();

    if (!response.ok) {
      toast.error("Error removing product:", data.error);
      return;
    }
    toast.success("Product removed:", data.message);
    // Optionally update your local UI state here, for example, by filtering out the removed product from your cart state.
  } catch (error) {
    toast.error("Failed to remove product from cart:", {
      toastId: "error-failed",
    });
  }
}

export default function CartDisplay() {
  const [cart, setCart] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch cart data
  useEffect(() => {
    async function fetchCart() {
      try {
        const res = await fetch("/api/cart/get");
        const data = await res.json();
        if (res.ok) {
          setCart(data.cart || []);
        } else {
          setError(data.error || "Failed to load cart");
        }
      } catch (err) {
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    }
    fetchCart();
  }, []);

  // Handler for changing quantity
  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
    // Optionally call your API to update quantity
  };

  if (loading) return <p>Loading cart...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container py-8 lg:py-16">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Product
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Quantity
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Total
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cart.map((item, index) => (
              <tr key={index}>
                {/* Product Cell */}
                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                  <img
                    className="h-10 w-10 rounded object-cover mr-4"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="text-sm font-medium text-gray-900">
                    {item.name}
                  </div>
                </td>
                {/* Price */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${item.price.toFixed(2)}
                </td>
                {/* Quantity Input */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, Number(e.target.value))
                    }
                    className="w-16 border border-gray-300 rounded px-2 py-1 text-sm"
                  />
                </td>
                {/* Total */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                {/* Action */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleRemove(item.productId)}
                    className="text-red-600 hover:text-red-900 text-sm"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
