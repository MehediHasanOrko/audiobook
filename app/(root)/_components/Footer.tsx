import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" flex space-x-5 justify-center items-center py-16">
      <p className="text-sm flex-grow w-[30%]">© Copyright 2023 Story2Listen Inc.</p>
      <ul className="w-[70%] flex flex-wrap  h-4  items-center gap-x-4 text-sm gap-y-2 justify-center ">
        <li>
          <Link className="hover:text-gray-500" href="/about">About Us</Link>
        </li>
        <Separator orientation="vertical" />
        <li>
          <Link className="hover:text-gray-500" href="/careers">Careers</Link>
        </li>
        <Separator orientation="vertical" />
        <li>
          <Link className="hover:text-gray-500" href="/condition">Conditions of Use</Link>
        </li>
        <Separator orientation="vertical" />
        <li>
          <Link className="hover:text-gray-500" href="/privacy">Privacy Notice</Link>
        </li>
        <Separator orientation="vertical" />
        <li>
          <Link className="hover:text-gray-500" href="/interest-based-ads">Interest-Based Ads</Link>
        </li>
        <Separator orientation="vertical" />
        <li>
          <Link className="hover:text-gray-500" href="/cookies">Cookies</Link>
        </li>
        <Separator orientation="vertical" />
        <li>
          <Link className="hover:text-gray-500" href="/interest-based-ads">Interest-Based Ads</Link>
        </li>
        <Separator orientation="vertical" />
        <li>
          <Link className="hover:text-gray-500" href="/cookies">Cookies</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
