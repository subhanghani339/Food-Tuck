"use server";

import { client as SanityClient } from "@/sanity/lib/client";
import { validateData } from "../helpers/validation";
import { checkoutSchema } from "../lib/validations/checkoutSchema";



export async function placeOrder(formData: any) {

  const validationResult = validateData(checkoutSchema, formData);
  if (!validationResult.success) {
    return { success: false, error: validationResult.error };
  }

  try {

    const order = await SanityClient.create({
      _type: "order",
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      country: formData.country,
      state: formData.state,
      city: formData.city,
      zipCode: formData.zipCode,
      address: formData.address,
      createdAt: new Date().toISOString(),
    });

    return { success: true, message: "Order placed successfully", orderId: order._id };
  } catch (error) {
    console.error("Sanity Error:", error);
    return { success: false, error: "Failed to place order. Try again later." };
  }
}
