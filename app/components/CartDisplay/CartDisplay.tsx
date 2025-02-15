"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";
import SolidButton from "../Buttons/SolidButton";
import { useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";

export default function CartDisplay() {
  const router = useRouter();
  const [cart, setCart] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  console.log(
    cart.filter((cart) => cart.id !== 3),
    "cart"
  );

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
      setCart(cart.filter((product) => product.productId !== productId));
      // Optionally update your local UI state here, for example, by filtering out the removed product from your cart state.
    } catch (error) {
      toast.error("Failed to remove product from cart:", {
        toastId: "error-failed",
      });
    }
  }

  if (loading)
    return (
      <div className="container py-8 lg:py-16">
        <Spinner />
      </div>
    );
  if (error)
    return (
      <div className="container py-8 lg:py-24">
        <p className="text-2xl md:text-4xl font-bold text-brand-500 text-center">
          {error}
        </p>
        <div className="mx-auto w-max mt-6">
          <SolidButton
            text="Login"
            className="rounded-0 text-white"
            onClick={() => router.push("/signin")}
          />
        </div>
      </div>
    );

  const cartTableHeaders = [
    { id: 1, name: "Product" },
    { id: 2, name: "Price" },
    { id: 3, name: "Quantity" },
    { id: 4, name: "Total" },
    { id: 5, name: "Action" },
  ];

  return (
    <div className="container py-8 lg:py-16">
      <table className="min-w-full divide-y divide-gray-200 shadow">
        <thead className="bg-gray-50">
          <tr>
            {cartTableHeaders.map((head, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-grey-100 uppercase tracking-wider"
              >
                {head.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {cart.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-8 md:py-16">
                There are currently no products in the cart
              </td>
            </tr>
          ) : (
            cart.map((item, index) => (
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
                    className="hover:text-brand-500 text-lg"
                  >
                    <RxCross2 className="mx-auto" />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
