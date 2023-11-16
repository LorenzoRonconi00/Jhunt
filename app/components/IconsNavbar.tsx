'use client';

import Image from "next/image";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

const IconsNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div className="flex flex-row items-center px-5">
                <div className="flex gap-32">
                    <div className="hidden relative h-[70px] w-[70px] rounded-full bg-[#bbbbbb] lg:flex items-center justify-center cursor-pointer">
                        <Image
                            src="/images/messaggi.svg"
                            alt="Messaggi"
                            width={40}
                            height={40}
                        />
                        <div className="h-[30px] w-[30px] bg-[#1F1695] rounded-full absolute -top-2 -right-2 flex items-center justify-center">
                            <h1 className="text-white font-bold text-[12px]">20</h1>
                        </div>
                    </div>
                    <div className="hidden relative h-[70px] w-[70px] rounded-full bg-[#bbbbbb] lg:flex items-center justify-center cursor-pointer">
                        <Image
                            src="/images/notifiche.svg"
                            alt="Notifiche"
                            width={50}
                            height={40}
                        />
                        <div className="h-[30px] w-[30px] bg-[#1F1695] rounded-full absolute -top-2 -right-2 flex items-center justify-center">
                            <h1 className="text-white font-bold text-[12px]">31</h1>
                        </div>
                    </div>
                    <Image
                        src="/images/profile.svg"
                        alt="Profilo"
                        width={70}
                        height={70}
                        className="md:block hidden cursor-pointer"
                        onClick={handleMenu}
                    />
                </div>
                {/* USER INFO */}
                <div className="hidden lg:flex flex-col px-7">
                    <h1 className="text-left font-bold">Federico Cervelli</h1>
                    <h2 className="text-left text-[#767676] text-[15px]">Lavoratore</h2>
                </div>
            </div>
            {menuOpen && (
                <div className="hidden lg:block absolute right-0 px-36 py-5 my-10">
                    <DropdownMenu />
                </div>
            )}
        </div>
    );
}

export default IconsNavbar;