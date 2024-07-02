import React from "react";
import Logo from "@/app/components/Logo";
import Searchbar from "./Searchbar";
import SigninSignup from "./SigninSignup";
import Cart from "./Cart";

function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center">
      {/* LOGO */}
      <Logo />
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
