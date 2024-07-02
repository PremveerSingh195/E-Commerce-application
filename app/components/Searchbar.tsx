import React from "react";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  return (
    <div className="flex flex-row items-center gap-2">
      <input
        type="text"
        className="bg-white text-black h-8 w-96 rounded-md p-3"
        placeholder="Search here"
      />
      <button>
        <FaSearch className="text-2xl" />
      </button>
    </div>
  );
}

export default Searchbar;
