import Image from "next/image";
import React from "react";
import Logo from "@/public/images/KikinLogo.svg";
import { BurgerMenu } from "./burger-menu";
import { Button } from "./ui/button";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="bg-[#122315] flex justify-between p-3 lg:pt-5">
        <div className="lg:hidden mr-10" />
        <Image src={Logo} alt="Logo" width={92} />
        <div className="hidden lg:flex justify-center items-center">
          <nav className=" text-sm text-[#f3ede4] uppercase font-GraphikMedium flex gap-6">
            <a href="/">how it works</a>
            <a href="#claculator">pricing</a>
            <a href="#FAQs">faqs</a>
            <a href="/">blog</a>
          </nav>
        </div>
        <div>
          <div className="lg:flex gap-3 hidden mr-2">
            <Button className="text-sm border rounded-xl py-5 border-gray-400/40 uppercase font-GraphikMedium bg-[#122315]">
              log in
            </Button>
            <button className="flex justify-center items-center bg-[#55dd4a] p-3 px-5 rounded-xl uppercase font-GraphikMedium text-sm">
              get funding
            </button>
          </div>
          <div className="lg:hidden mr-2">
            <BurgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
