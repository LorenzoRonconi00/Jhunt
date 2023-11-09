"use client";

import Image from "next/image";

const items = [
  {
    name: "Crea Curriculum",
    link: "#",
  },
  {
    name: "Per le Aziende",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 w-screen flex justify-between items-center py-[20px] px-[40px] md:py-[40px] md:px-[60px]">
      <div className="flex justify-start items-center gap-20">
        <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
          <Image
            src="/images/logo.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className=" hidden md:flex gap-20 md:font-bold md:text-black md:text-[24px] whitespace-nowrap">
          {items.map((item, index) => (
            <a href={item.link} key={index}>
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center">
        <button className="hidden md:block bg-transparent text-[#1f1695] py-3 px-8 border-[2px] border-black/20 rounded-[10px] font-semibold">
          ISCRIVITI
        </button>
        <img
          src="/images/menu-hamburger.png"
          alt="Menu"
          className="block md:hidden w-[35px]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
