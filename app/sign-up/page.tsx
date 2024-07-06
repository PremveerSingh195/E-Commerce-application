import React from "react";
import Link from "next/link";
import { InputBox } from "@/components";
import Navbar from "@/components/Navbar";

function Signup() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-2 justify-center items-center my-auto bg-gray-700 w-80 h-80 rounded-md ">
          <h2>Join BUYIMG</h2>
          <h4>Sign up to start new way of file sharing</h4>

          <InputBox label="username" type="text" />

          <InputBox label="Email" type="email" />

          <InputBox label="Password" type="password" />
          <div>
            <button className="border py-0.5 px-1 rounded-lg bg-black hover:bg-gray-500">
              Sign up
            </button>
          </div>
          <p>
            Already a member ?{" "}
            <Link href="/sign-in" className="font-semibold text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
