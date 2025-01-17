import React from "react";
import FTInput from "@/app/components/FTInput/FTInput";
import SolidButton from "../Buttons/SolidButton";

const ContactForm = () => {
  return (
    <div className="container my-20 max-w-xl p-5 shadow-loginShadow">
      <h2 className="text-grey-100 text-xl text-center font-bold mb-5">
        Send Us A Message!
      </h2>
      <div className="flex flex-col gap-4">
        <FTInput type="text" name="firstname" placeholder="First Name" />
        <FTInput type="text" name="lastname" placeholder="Last Name" />
        <FTInput type="email" name="email" placeholder="Email" />
        <textarea
          className="border border-grey-500 p-2 focus-visible:outline-none placeholder:text-grey-200"
          placeholder="Your Message"
          rows={4}
        />
        <SolidButton text={"Send"} className="text-white rounded-0" />
      </div>
    </div>
  );
};

export default ContactForm;
