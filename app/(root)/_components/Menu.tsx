"use client";

import { ArrowBottomLeftIcon, ArrowDownIcon, ArrowUpIcon, ChevronDownIcon, DropdownMenuIcon, MagnifyingGlassIcon, ThickArrowDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { MenuSeed } from "./MenuSeed";





const Menu = () => {
  return (
    <div className="flex flex-row items-center justify-between  text-center">
      <div className="flex flex-row items-center justify-center text-center py-2 ">
      <MenuSeed/>
      </div>
      <div className="flex flex-row gap-3">
        <div className="flex flex-row items-center bg-gray-700 opacity-50 rounded-sm text-white py-2 px-2 ">
          <input
            type="text"
            name=""
            id=""
            className="text-white bg-transparent placeholder-white w-96 max-w-xs outline-none px-2"
            placeholder="Find your great listen"
          />
          <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
