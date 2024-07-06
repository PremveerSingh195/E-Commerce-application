import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

function Signin() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-2 justify-center items-center my-auto bg-gray-700 w-80 h-80 rounded-md ">
          <h2>Welcome back to BUYIMG</h2>
          <h4>Sign in to start new way of file sharing</h4>
          <h5>username/email</h5>
          <input type="text" className="text-black" />
          <h5>Password</h5>
          <input type="password" className="text-black" />
          <div>
            <button className="border py-0.5 px-1 rounded-lg bg-black hover:bg-gray-500">
              Sign in
            </button>
          </div>
          <p>
            Don&apos;t have Account ?{" "}
            <Link href="/sign-up" className="font-semibold text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signin;
