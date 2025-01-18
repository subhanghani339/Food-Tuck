"use client";

import React, { useState } from "react";
import { CiMail, CiLock, CiUser } from "react-icons/ci";
import FTInput from "@/app/components/FTInput/FTInput";
import SolidButton from "../Buttons/SolidButton";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { signIn } from "next-auth/react";

interface LoginRegisterProps {
  heading?: string;
  isSignUp?: boolean;
}

const LoginRegister: React.FC<LoginRegisterProps> = ({
  heading = "Sign In",
  isSignUp = false,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Handle registration via NextAuth.js or custom backend
    if (isSignUp) {
      // Send the user data to the backend or NextAuth API
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (res.ok) {
        // Handle success: e.g., redirect user or show message
        alert("Registration successful!");
      } else {
        // Handle error
        alert(data.error ?? "Registration failed. Please try again.");
      }
    } else {
      // Proceed with sign in (for login form)
      const res = await signIn("credentials", { redirect: false, email, password });

      if (res?.error) {
        // alert('Username or password is incorrect');
        console.log(res.error)
      }
    }
  };

  return (
    <div className="container my-20 max-w-sm p-5 shadow-loginShadow">
      <h2 className="text-grey-100 text-md font-bold mb-5">{heading}</h2>
      <div className="flex flex-col gap-4">
        {isSignUp && (
          <FTInput
            Icon={CiUser}
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <FTInput
          Icon={CiMail}
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FTInput
          Icon={CiLock}
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember" className="ms-2">
            Remember Me?
          </label>
        </div>

        <SolidButton
          text={heading}
          className="text-white rounded-0"
          onClick={handleSubmit}
        />

        {!isSignUp && (
          <div className="text-grey-300 flex justify-between text-xs">
            <Link href="/signup">Sign Up Here!</Link>
            <Link href="/signup">Forgot Password?</Link>
          </div>
        )}

        <div className="flex items-center mt-8 mb-4">
          <hr className="flex-grow border-t" />
          <span className="p-1 border text-gray-500 helvetica">OR</span>
          <hr className="flex-grow border-t" />
        </div>

        <button
          className="flex items-center border border-grey-500 px-4 py-2 helvetica text-grey-200"
          onClick={() => signIn("google")}
        >
          <FcGoogle fontSize={20} />
          <span className="w-full"> Sign Up with Google </span>
        </button>

        <button className="flex items-center border border-grey-500 px-4 py-2 helvetica text-grey-200">
          <GrApple fontSize={20} />
          <span className="w-full"> Sign Up with Apple </span>
        </button>
      </div>
    </div>
  );
};

export default LoginRegister;
