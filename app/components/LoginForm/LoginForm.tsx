import React from "react";
import { CiMail, CiLock } from "react-icons/ci";
import FTInput from "@/app/components/FTInput/FTInput";

const LoginForm = () => {
  return (
    <div className="container my-20 max-w-sm p-5 shadow-loginShadow">
      <h2 className="text-grey-100 text-md font-bold mb-3">Sign In</h2>
      <div className="flex flex-col gap-4">
        <FTInput Icon={CiMail} type="email" name="email" placeholder="Email" />
        <FTInput
          Icon={CiLock}
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
    </div>
  );
};

export default LoginForm;
