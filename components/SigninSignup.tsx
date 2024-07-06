"use client";
import React from "react";
import { useRouter } from "next/navigation";

function SigninSignup() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/sign-in");
  };
  return (
    <div>
      <button
        className="p-1 rounded-lg text-lg bg-white text-black font-bold"
        onClick={handleLoginClick}
      >
        Login
      </button>
    </div>
  );
}

export default SigninSignup;
