import Image from "next/image";
import React from "react";

interface SingleResult {
    azienda: string;
    ruolo: string;
    prezzo: string;
    descrizione: string;
    logo: string;
    posizione: string;
}

const SingleResult: React.FC<SingleResult> = ({
    azienda,
    ruolo,
    prezzo,
    descrizione,
    logo,
    posizione,
}) => {
    return (
        <div className="w-full h-full border-2 bg-white rounded-[10px] flex justify-between cursor-pointer">
            <div className="flex flex-col justify-start lg:px-10 md:w-[250px] lg:py-5 lg:gap-y-3 md:px-8 md:py-5 md:gap-y-2 overflow-hidden">
                <h2 className="text-[#737373] font-semibold lg:text-[16px] md:text-[14px]">{azienda}</h2>
                <h1 className="text-black lg:text-[24px] md:text-[20px] font-bold">{ruolo}</h1>
                <h2 className="text-[#1F1695] lg:text-[18px] md:text-[16px] font-semibold whitespace-nowrap">{prezzo}</h2>
                <p className="text-black/70 lg:text-[14px] md:text-[12px] font-semibold">{descrizione}</p>
            </div>
            <div className="px-8 py-5 flex flex-col justify-between items-end">
                <div className="bg-white lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] border-2 rounded-[10px] flex items-center justify-center">
                    <div className="lg:w-[30px] lg:h-[30px] md:w-[20px] md:h-[20px]">
                        <Image src={logo} alt="" width={30} height={30} />
                    </div>
                </div>
                <h2 className="lg:text-[16px] md:text-[14px] text-black font-semibold text-end">{posizione}</h2>
            </div>
        </div>
    );
}

export default SingleResult;