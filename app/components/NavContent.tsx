import Image from "next/image";
import React from "react";

interface NavContentProps {
    content: string;
}

const NavContent: React.FC<NavContentProps> = ({
    content
}) => {
    return ( 
        <div className="flex flex-row items-center justify-between py-10 px-5">
                    <div className="flex gap-5">
                        {/* LOGO AND CONTENT */}
                        <div className="h-16 w-16 rounded-full bg-[#1F1695] mr-10"></div>
                        <div className="flex flex-col justify-center">
                            <h1 className="font-bold text-4xl">{content}</h1>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        {/* ICONS */}
                        <div className="flex gap-32">
                            <div className="hidden relative h-[70px] w-[70px] rounded-full bg-[#bbbbbb] lg:flex items-center justify-center">
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
                            <div className="hidden relative h-[70px] w-[70px] rounded-full bg-[#bbbbbb] lg:flex items-center justify-center">
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
                            />
                        </div>
                        {/* USER INFO */}
                        <div className="flex flex-col px-7">
                            <h1 className="text-left font-bold">Federico Cervelli</h1>
                            <h2 className="text-left text-[#767676] text-[15px]">Lavoratore</h2>
                        </div>
                    </div>
                </div>
     );
}
 
export default NavContent;