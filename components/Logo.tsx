import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <div className="flex flex-row justify-start items-center gap-2 p-2">
      <Image
        src={logo}
        alt="LOGO"
        height={50}
        width={50}
        className="rounded-3xl"
      />
      <h2 className="text-xl font-bold">BUYIMG</h2>
    </div>
  );
}

export default Logo;
