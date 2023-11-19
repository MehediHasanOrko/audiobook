"use client";

import { ModeToggle } from "@/components/mode.toggle";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

const Heading = () => {
  return (
    <div className="flex flex-row items-center justify-between  text-center">
      <Image alt="stort2listen" src="/s2l.png" width={150} height={40} />
      <div className="flex flex-row items-center justify-center gap-3 h-4 text-gray-200">
        <Link href="/signup" className="">
          <h3>Sign Up</h3>
        </Link>
        <Separator orientation="vertical" />
        <Link href="/login">
          <h3>Sign in</h3>
        </Link>
      </div>
      {/*       <ModeToggle/>
       */}{" "}
    </div>
  );
};

export default Heading;
