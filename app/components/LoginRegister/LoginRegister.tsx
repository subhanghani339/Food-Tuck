'use client'

import React from "react";
import { CiMail, CiLock, CiUser } from "react-icons/ci";
import FTInput from "@/app/components/FTInput/FTInput";
import SolidButton from "../Buttons/SolidButton";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { signIn, signOut, useSession } from "next-auth/react";

interface LoginRegisterProps {
  heading?: string;
  isSignUp?: boolean;
}

const LoginRegister: React.FC<LoginRegisterProps> = ({
  heading = "Sign In",
  isSignUp = false,
}) => {

  const { data: session } = useSession(); // Get the session data

  return (
    <div className="container my-20 max-w-sm p-5 shadow-loginShadow">
      <h2 className="text-grey-100 text-md font-bold mb-5">{heading}</h2>
      <div className="flex flex-col gap-4">
        {isSignUp && (
          <FTInput Icon={CiUser} type="text" name="name" placeholder="Name" />
        )}
        <FTInput Icon={CiMail} type="email" name="email" placeholder="Email" />
        <FTInput
          Icon={CiLock}
          type="password"
          name="password"
          placeholder="Password"
        />
        <div>
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember" className="ms-2">
            Remember Me?
          </label>
        </div>

        <SolidButton text={heading} className="text-white rounded-0" />

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

        {session &&
          <div>
            <p>Welcome, {session?.user?.name}!</p>
            <p>Email: {session?.user?.email}</p>
            <button onClick={() => signOut()} className="mt-4 p-2 bg-blue-500 text-white rounded">
              Sign Out
            </button>
          </div>}
      </div>
    </div>
  );
};

export default LoginRegister;
