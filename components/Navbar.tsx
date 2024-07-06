import React from "react";
import Logo from "@/components/Logo";
import Searchbar from "@/components/Searchbar";
import SigninSignup from "@/components/SigninSignup";
import Cart from "@/components/Cart";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center">
      {/* LOGO */}
      <Link href="/">
        <Logo />
      </Link>
      {/* Search bar */}
      <Searchbar />
      <div className="flex flex-row">
        {/* SigninSignup button */}
        <SigninSignup />
        {/* cart button */}
        <Cart />
      </div>
    </div>
  );
}

export default Navbar;
