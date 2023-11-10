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
      <div className="flex justify-start items-center lg:gap-20 md:gap-10">
        <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
          <Image
            src="/images/logo.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="hidden md:flex md:gap-10 lg:gap-20 md:font-bold md:text-black lg:text-[24px] md:text-[20px] whitespace-nowrap">
          {items.map((item, index) => (
            <a href={item.link} key={index}>
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center lg:gap-10">
        <a href="#" className="hidden lg:block text-black font-bold text-[18px]">ACCEDI</a>
        <button className="hidden md:block bg-transparent text-[#1f1695] lg:py-3 lg:px-8 py-2 px-4 border-[2px] border-black/20 rounded-[10px] font-semibold">
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
