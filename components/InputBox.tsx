import React from "react";

interface InputBoxProps {
  label: string;
  type: string;
}

function InputBox({ label, type }: InputBoxProps) {
  return (
    <div className="flex flex-col gap-1 items-center justify-center ">
      <h2>{label}</h2>
      <input type={type} className="text-black" />
    </div>
  );
}

export default InputBox;
