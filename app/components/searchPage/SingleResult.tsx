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
        <div className="w-full h-full border-2 shadow-2xl bg-white rounded-[10px] flex justify-between">
            <div className="flex flex-col justify-start px-10 py-5 gap-y-3">
                <h2 className="text-[#737373] font-semibold text-[16px]">{azienda}</h2>
                <h1 className="text-black text-[24px] font-bold">{ruolo}</h1>
                <h2 className="text-[#1F1695] text-[18px] font-semibold">{prezzo}</h2>
                <p className="text-black/70 text-[14px] font-semibold">{descrizione}</p>
            </div>
            {/* <div className="flex flex-col justify-between py-5">
                <div className="bg-white w-[50px] h-[50px] border-2 rounded-[10px] flex items-center justify-center">
                    <Image src={logo} alt="" width={30} height={30}/>
                </div>
                <h2 className="text-black text-[14px] font-semibold mr-10">{posizione}</h2>
            </div> */}
            <div className="px-8 py-5 flex flex-col justify-between items-end">
                <div className="bg-white w-[50px] h-[50px] border-2 rounded-[10px] flex items-center justify-center">
                    <Image src={logo} alt="" width={30} height={30} />
                </div>
                <h2 className="text-[16px] text-black font-semibold">{posizione}</h2>
            </div>
        </div>
    );
}

export default SingleResult;