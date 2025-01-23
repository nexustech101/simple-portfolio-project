import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-between w-full mb-8">
            <div className="min-w-[200px] flex flex-col items-center">
              <h2 className="font-bold text-lg mb-4">Community</h2>
              <p className="flex items-center my-2 cursor-pointer">
                <FaYoutube />
                <span className="text-sm ml-2">Youtube</span>
              </p>
              <p className="flex items-center my-2 cursor-pointer">
                <RxGithubLogo />
                <span className="text-sm ml-2">Github</span>
              </p>
              <p className="flex items-center my-2 cursor-pointer">
                <RxDiscordLogo />
                <span className="text-sm ml-2">Discord</span>
              </p>
            </div>
            <div className="min-w-[200px] flex flex-col items-center">
              <h2 className="font-bold text-lg mb-4">Social Media</h2>
              <p className="flex items-center my-2 cursor-pointer">
                <RxInstagramLogo />
                <span className="text-sm ml-2">Instagram</span>
              </p>
              <p className="flex items-center my-2 cursor-pointer">
                <RxTwitterLogo />
                <span className="text-sm ml-2">Twitter</span>
              </p>
              <p className="flex items-center my-2 cursor-pointer">
                <RxLinkedinLogo />
                <span className="text-sm ml-2">LinkedIn</span>
              </p>
            </div>
            <div className="min-w-[200px] flex flex-col items-center">
              <h2 className="font-bold text-lg mb-4">About</h2>
              <p className="flex items-center my-2 cursor-pointer">
                <span className="text-sm ml-2">Become Sponsor</span>
              </p>
              <p className="flex items-center my-2 cursor-pointer">
                <span className="text-sm ml-2">Learning about me</span>
              </p>
              <p className="flex items-center my-2 cursor-pointer">
                <span className="text-sm ml-2">charlesldefreeseiii@gmail.com</span>
              </p>
            </div>
          </div>
          <div className="text-center text-sm mb-4">
            &copy; Development 2023 Inc. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
