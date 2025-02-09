"use client";

import React, { FormEvent, useState } from "react";
import FTInput from "@/app/components/FTInput/FTInput";
import SolidButton from "../Buttons/SolidButton";
import { toast } from "react-toastify";
import Link from "next/link";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/forgotPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data?.message);
        setEmail("");
      } else {
        toast.error(
          data.error || "Failed to send an Email. Please try again.",
          {
            toastId: data?.error,
          }
        );
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.", {
        toastId: 404,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container my-20 max-w-sm p-5 shadow-loginShadow">
      <h2 className="text-grey-100 text-xl text-center font-bold mb-3">
        Forgot Your Password?
      </h2>
      <p className="mb-4 text-grey-300 text-sm text-center">
        Enter your email and we will sent you a link to reset your password
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FTInput
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Submit Form button */}
        <SolidButton
          text={isSubmitting ? "Sending..." : "Send"}
          className="text-white rounded-0"
        />
        {/* Back to login button */}
        <Link className="text-center" href="/signin">
          Back To Login
        </Link>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
