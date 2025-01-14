"use client";

import { signOut, useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col gap-4 justify-center items-center font-bold min-h-80 ">
      <p>Welcome, {session?.user?.name}!</p>
      <p>Email: {session?.user?.email}</p>
      <button
        onClick={() => signOut()}
        className="mt-4 p-2 bg-brand-500 text-white rounded"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
