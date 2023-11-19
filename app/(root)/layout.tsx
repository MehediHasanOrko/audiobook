"use client";

import Heading from "./_components/Heading";
import Menu from "./_components/Menu";
import { cn } from "@/lib/utils";

const Rootlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bgdarkish  text-blue-gray-100 w-full md:w-[1020px] mx-auto ">
      <div className="space-y-5 p-6 flex flex-col ">
        <Heading />
        <Menu />
      </div>
      {children}
    </div>
  );
};

export default Rootlayout;
