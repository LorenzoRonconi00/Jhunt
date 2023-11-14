"use client";

import Image from "next/image";
import { useState } from "react";
import {
  UserOutlined,
  FileOutlined,
  SendOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

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

const menuItems = [
  {
    name: "Account",
    link: "#",
    icon: <UserOutlined />,
  },
  {
    name: "Curriculum",
    link: "#",
    icon: <FileOutlined />,
  },
  {
    name: "Cadidature",
    link: "#",
    icon: <SendOutlined />,
  },
  {
    name: "Impostazioni",
    link: "#",
    icon: <SettingOutlined />,
  },
  {
    name: "Logout",
    link: "#",
    icon: <LogoutOutlined />,
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed z-50 top-0 w-screen flex justify-between items-center py-[15px] px-[25px] md:py-[40px] md:px-[60px]">
        <div className="flex justify-start items-center lg:gap-20 md:gap-10">
          <div className="relative w-10 md:w-20 lg:w-36 h-20">
            <Image
              src={"/images/logo-jhunt-text.svg"}
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
          <a
            href="#"
            className="hidden lg:block text-black font-bold text-[18px]"
          >
            ACCEDI
          </a>
          <button className="hidden md:block bg-transparent text-[#1f1695] lg:py-3 lg:px-8 py-2 px-4 border-[2px] border-black/20 rounded-[10px] font-semibold">
            ISCRIVITI
          </button>
          <button
            className="block md:hidden relative w-10 h-10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Image
              src="/images/menu-hamburger.png"
              alt="Menu"
              layout="fill"
              objectFit="contain"
            />
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <button
            className="absolute left-0 w-1/4 h-screen bg-black/30 z-[51]"
            onClick={() => setMenuOpen(!menuOpen)}
          ></button>
          <div className="absolute right-0 w-3/4 h-screen bg-[#10829a] z-[52] flex flex-col">
            <div className="flex justify-end w-full py-[15px] pr-[25px]">
              <div className="flex flex-col mr-3">
                <h1 className="text-white text-right">Lavoratore</h1>
                <h2 className="text-white text-right font-bold">
                  Federico Cervelli
                </h2>
              </div>
              <div className="h-12 w-12 rounded-full bg-[black]"></div>
            </div>
            <div className="flex justify-center w-full">
              <div className="bg-[#46A1B6] w-10/12 h-[2px]"></div>
            </div>
            <div className="flex justify-center w-full h-full my-10">
              <div className=" h-full w-full mx-3 gap-5 flex flex-col justify-start">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-end w-full items-center text-white"
                  >
                    <div className="flex justify-end items-center gap-5 text-2xl">
                      <a href={item.link}>{item.name}</a>
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
