import Image from "next/image";
import React from "react";
import IconsNavbar from "./IconsNavbar";

interface NavContentProps {
  content: string;
}

const NavContent: React.FC<NavContentProps> = ({ content }) => {
  return (
    <div className="flex flex-row items-center justify-between py-5 px-5">
      <div className="flex gap-5">
        <div className="flex flex-col justify-center mx-1">
          <h1 className="font-bold text-4xl">{content}</h1>
        </div>
      </div>
      <IconsNavbar />
    </div>
  );
};

export default NavContent;
