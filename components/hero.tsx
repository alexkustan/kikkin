import React from "react";
import { CtaButton } from "./cta-button";
import Image from "next/image";
import mainBg from "@/public/images/main-bg.svg";

export const Hero: React.FC = () => {
  return (
    <section className="bg-[#122315]">
      <div className="pt-8 relative">
        <div className="flex items-center flex-col">
          <h1 className="text-[#f3ede4] text-6xl md:text-8xl leading-[48px] md:leading-[80px] lg:text-9xl lg:leading-[100px] font-deaconBlack uppercase text-center flex flex-col">
            Financing <span className="text-[#55dd4a]"> the future</span>
          </h1>
          <p className="text-[#f3ede4] text-base font-normal text-center mt-5 mb-3 max-w-md lg:z-20 md:mt-10">
            Pay suppliers faster, manage invoices, and extend cash for longer.
            Get access to funding without giving up equity, so that you can
            focus on growing your company.
          </p>
          <div className="z-20 mt-2">
            <CtaButton />
          </div>
          <Image
            src={mainBg}
            alt="background"
            className="absolute -z-10 top-[350px] lg:hidden"
          />
          <Image
            src={mainBg}
            alt="background"
            className="absolute z-10 top-[246px] w-screen hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
};
