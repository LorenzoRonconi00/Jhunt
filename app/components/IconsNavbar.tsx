'use client';

import Image from "next/image";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

const items = [
    {
        source: "/images/messaggi.svg",
        number: 20
    },
    {
        source: "/images/notifiche.svg",
        number: 30
    }
]

const IconsNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div className="flex flex-row items-center xl:px-5 md:px-3">
                <div className="flex xl:gap-32 gap-20">
                    {items.map((item, index) => (
                        <div className="hidden relative xl:h-[70px] md:h-[50px] xl:w-[70px] md:w-[50px] rounded-full bg-[#bbbbbb] md:flex items-center justify-center cursor-pointer"
                            key={index}>
                            <div className="xl:h-[40px] xl:w-[40px] md:h-[30px] md:w-[30px]">
                                <Image
                                    src={item.source}
                                    alt=""
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div className="xl:h-[30px] xl:w-[30px] md:h-[20px] md:w-[20px] bg-[#1F1695] rounded-full absolute xl:-top-2 xl:-right-2 -top-1 -right-1 flex items-center justify-center">
                                <h1 className="text-white font-bold xl:text-[12px] md:text-[10px]">20</h1>
                            </div>
                        </div>
                    ))}
                    <div className="md:block hidden cursor-pointer xl:w-[70px] xl:h-[70px] md:w-[50px] md:h-[50px]">
                        <Image
                            src="/images/profile.svg"
                            alt=""
                            width={70}
                            height={70}
                            onClick={handleMenu}
                        />
                    </div>
                </div>
                {/* USER INFO */}
                <div className="hidden md:flex flex-col xl:px-7 md:px-5">
                    <h1 className="text-left font-bold md:text-[15px]">Federico Cervelli</h1>
                    <h2 className="text-left text-[#767676] md:text-[15px]">Lavoratore</h2>
                </div>
            </div>
            {menuOpen && (
                <div className="hidden md:block absolute right-0 xl:px-36 xl:py-5 md:px-28 md:py-3 xl:my-10 md:my-5">
                    <DropdownMenu />
                </div>
            )}
        </div>
    );
}

export default IconsNavbar;