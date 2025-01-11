import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Image from "next/image";
import Logo from "@/public/images/KikinLogo.svg";
import Menu from "@/public/images/menu-icon.svg";

export const BurgerMenu: React.FC = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div className=" bg-[#55dd4a] size-10 flex justify-center items-center rounded-full mt-2">
            <Image src={Menu} alt="Menu" />
          </div>
        </SheetTrigger>
        <SheetContent side="top" className="bg-[#122315]">
          <SheetHeader>
            <SheetTitle className="flex justify-center mb-8">
              <Image src={Logo} alt="Logo" />
            </SheetTitle>
            <SheetDescription className="uppercase font-GraphikMedium text-[#f3ede4] flex flex-col text-center gap-5 mt-16">
              <a href="/">how it works</a>
              <a href="#calculator">pricing</a>
              <a href="#FAQs">faqs</a>
              <a href="/">blog</a>
              <a href="/">log in</a>
              <a href="/">get funding</a>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
