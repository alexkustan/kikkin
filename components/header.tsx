import Image from "next/image";
import React from "react";
import Logo from "@/public/images/KikinLogo.svg";
import { BurgerMenu } from "./burger-menu";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="container bg-[#122315]">
        <div></div>
        <Image src={Logo} alt="Logo" width={100} />
        <div>
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};
