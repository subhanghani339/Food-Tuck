"use client";

import React, { FormEvent, useState } from "react";
import FTInput from "@/app/components/FTInput/FTInput";
import SolidButton from "../Buttons/SolidButton";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data?.message);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(
          data.error || "Failed to send your message. Please try again."
        );
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container my-20 max-w-xl p-5 shadow-loginShadow">
      <h2 className="text-grey-100 text-xl text-center font-bold mb-5">
        Send Us A Message!
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FTInput
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <FTInput
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <FTInput
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className="border border-grey-500 p-2 focus-visible:outline-none placeholder:text-grey-200"
          placeholder="Your Message"
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <SolidButton
          text={isSubmitting ? "Sending..." : "Send"}
          className="text-white rounded-0"
        />
      </form>
    </div>
  );
};

export default ContactForm;
