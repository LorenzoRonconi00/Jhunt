'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const items = [
  {
    icon: "images/pinblack.svg",
    name: "LUOGO DI LAVORO",
    opt1: "In Sede",
    opt2: "Da Remoto",
    opt3: "Ibrido",
  },
  {
    icon: "images/orario.svg",
    name: "ORARIO",
    opt1: "Full-Time",
    opt2: "Part-Time",
  },
  {
    icon: "images/sede.svg",
    name: "SEDE",
    opt1: "Nazionale",
    opt2: "Internazionale",
  },
  {
    icon: "images/contratto.svg",
    name: "CONTRATTO",
  },
  {
    icon: "images/stipendio.svg",
    name: "STIPENDIO",
  },
  {
    icon: "images/pubblicato.svg",
    name: "PUBBLICATO",
  }
];

const Filters = () => {
  const router = useRouter();

  return (
    <div className="hidden lg:fixed w-screen z-1 top-0 lg:flex lg:flex-col px-[60px]">
      <div className="absolute left-[500px]">
        <Image src="images/Vector.svg" alt="logo" width={215} height={200} />
      </div>
      <div className="flex justify-start pb-10 mt-10">
        <Image src="images/logo-jhunt-notext.svg" alt="logo" width={50} height={50} onClick={() => router.push("/")} className="cursor-pointer" />
      </div>
      <div className="flex flex-col px-14 gap-y-8">
        <h1 className="text-[#1F1695] text-[45px] font-semibold">Filtra per</h1>
        {/* TITOLI FILTRI */}
        {items.map((item, index) => (
          <div key={index} className="flex items-start flex-col gap-2">
            <div className="flex items-center gap-5">
              <Image src={item.icon} alt="icon" width={30} height={30} />
              <h1 className="text-[20px] text-black font-bold">{item.name}</h1>
            </div>
            {/* LUOGO DI LAVORO */}
            {index === 0 && (
              <div className="text-black text-[18px] font-semibold mx-14">
                <div className="flex flex-row items-center gap-5 py-1">
                  <button className="bg-transparent border-2 border-black rounded-full h-[20px] w-[20px]" />
                  <h2>{item.opt1}</h2>
                </div>
                <div className="flex flex-row items-center gap-5 py-1">
                  <button className="bg-transparent border-2 border-black rounded-full h-[20px] w-[20px]" />
                  <h2>{item.opt2}</h2>
                </div>
                <div className="flex flex-row items-center gap-5 py-1">
                  <button className="bg-transparent border-2 border-black rounded-full h-[20px] w-[20px]" />
                  <h2>{item.opt3}</h2>
                </div>
              </div>
            )}
            {/* ORARIO */}
            {index === 1 && (
              <div className="text-black text-[18px] font-semibold mx-14">
                <div className="flex flex-row items-center gap-5 py-1">
                  <button className="bg-transparent border-2 border-black rounded-full h-[20px] w-[20px]" />
                  <h2>{item.opt1}</h2>
                </div>
                <div className="flex flex-row items-center gap-5 py-1">
                  <button className="bg-transparent border-2 border-black rounded-full h-[20px] w-[20px]" />
                  <h2>{item.opt2}</h2>
                </div>
              </div>
            )}
            {/* SEDE */}
            {index === 2 && (
              <div className="mx-14">
                <div className="text-black text-[18px] font-semibold">
                  <div className="flex flex-row items-center gap-5 py-1">
                    <button className="bg-transparent border-2 border-black rounded-full h-[20px] w-[20px]" />
                    <h2>{item.opt1}</h2>
                  </div>
                  <div className="flex flex-row items-center gap-5 py-1">
                    <button className="bg-transparent border-2 border-black rounded-full h-[20px] w-[20px]" />
                    <h2>{item.opt2}</h2>
                  </div>
                </div>
                <button className="bg-[#1F1695] text-white text-[15px] font-semibold mt-3 px-8 flex items-center py-[8px] rounded-[10px] gap-5">
                  <h1 className="-ml-3">Generica</h1>
                  <Image
                    src="/images/white-arrow.svg"
                    alt="red-arrow"
                    width={20}
                    height={20}
                    className="-mr-3"
                  />
                </button>
              </div>
            )}
            {/* CONTRATTO */}
            {index === 3 && (
              <div className="mx-14">
                <button className="bg-[#1F1695] text-white text-[15px] font-semibold mt-3 px-8 flex items-center py-[8px] rounded-[10px] gap-5">
                  <h1 className="-ml-3">Indeterminato</h1>
                  <Image
                    src="/images/white-arrow.svg"
                    alt="red-arrow"
                    width={20}
                    height={20}
                    className="-mr-3"
                  />
                </button>
              </div>
            )}
            {/* STIPENDIO */}
            {index === 4 && (
              <div className="mx-14">
                <input className="bg-[#1F1695] text-white text-[15px] font-semibold mt-3 flex items-center px-5 py-[8px] rounded-[8px] gap-2 w-[100px]"
                  type="number" inputMode="numeric" placeholder="Min" />
              </div>
            )}
            {/* PUBBLICATO */}
            {index === 5 && (
              <div className="mx-14">
                <button className="bg-[#1F1695] text-white text-[15px] font-semibold mt-3 px-8 flex items-center py-[8px] rounded-[10px] gap-5">
                  <h1 className="-ml-3">7 giorni</h1>
                  <Image
                    src="/images/white-arrow.svg"
                    alt="red-arrow"
                    width={20}
                    height={20}
                    className="-mr-3"
                  />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <footer className="fixed bottom-0 left-0 z-[-1]">
        <Image src="images/Blobs.svg" alt="Blobs" width={800} height={300} />
      </footer>
    </div>
  );
};

export default Filters;
