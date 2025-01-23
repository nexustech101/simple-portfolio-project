import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { AvatarChip } from "../global/AvatarChip";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-10">
      <div className="w-full h-full flex flex-row items-center gap-5 justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex items-center">
          <AvatarChip />
        </a>

        <div className="flex flex-row items-center justify-end w-full h-full">
          <div className="flex items-center justify-between w-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 hidden md:flex">
            <a href="#about-me" className="cursor-pointer mx-2">
              About me
            </a>
            <a href="#skills" className="cursor-pointer mx-2">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer mx-2">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer mx-2">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
