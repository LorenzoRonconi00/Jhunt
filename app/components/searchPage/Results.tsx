'use client';

import Image from "next/image";
import { useState } from "react";
import SingleResult from "./SingleResult";

const items = [
  {
    name: "Le tue Skill",
  },
  {
    name: "Backend Developer",
  },
  {
    name: "Frontend Developer",
  },
  {
    name: "Programmer",
  },
];

const results = [
  {
    azienda: "Microsoft Team",
    ruolo: "Programmatore Junior C#",
    prezzo: "€ 55.000 - € 65.000",
    descrizione: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus",
    logo: "images/microsoft.svg",
    posizione: "Washington, America",
  },
  {
    azienda: "Microsoft Team",
    ruolo: "Programmatore Junior C#",
    prezzo: "€ 55.000 - € 65.000",
    descrizione: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus",
    logo: "images/microsoft.svg",
    posizione: "Washington, America",
  },
  {
    azienda: "Microsoft Team",
    ruolo: "Programmatore Junior C#",
    prezzo: "€ 55.000 - € 65.000",
    descrizione: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus",
    logo: "images/microsoft.svg",
    posizione: "Washington, America",
  },

]

function SearchBox() {
  const risultati = 5;

  const [clickedButtons, setClickedButtons] = useState(1);

  const handleClickColumns = () => {
    setClickedButtons(1);
  }

  const handleClickRows = () => {
    setClickedButtons(2);
  }

  return (
    <>
      <div className="w-full h-full pb-[110px] xl:px-5 xl:py-20 md:py-5 md:px-8 bg-white md:rounded-t-[30px] xl:rounded-none rightSectionShadow">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-black md:text-[18px] font-bold">{risultati} risultati di annunci</h1>
          <div className="flex flex-row items-center gap-x-5">
            <button className="flex flex-row items-center justify-center gap-x-2 bg-white border-4 rounded-[30px] px-5 py-2">
              <h1 className="text-[#1F1695] text-[18px] font-bold">Recenti</h1>
              <Image src="images/arrow-blue.svg" alt="" width={20} height={20} />
            </button>
            <button
              onClick={handleClickColumns}
              className={`flex items-center justify-center ${clickedButtons === 1 ? "border-2 border-[#1F1695]" : "border-0"} bg-[#DFF4FB] rounded-full w-[50px] h-[50px]`}>
              <Image src="images/columns.svg" alt="" width={25} height={25} />
            </button>
            <button
              onClick={handleClickRows}
              className={`flex items-center justify-center ${clickedButtons === 2 ? "border-2 border-[#1F1695]" : "border-0"} bg-[#DFF4FB] rounded-full w-[50px] h-[50px]`}>
              <Image src="images/rows.svg" alt="" width={25} height={25} />
            </button>
          </div>
        </div>
        {/* divider  tablet e smartphone*/}
        <div className="xl:hidden w-full h-[1px] bg-black/25 md:my-8" />
        {/* risultati */}
        <div className={`flex ${clickedButtons === 1 ? "flex-col" : "grid xl:grid-cols-3 md:grid-cols-2 xl:gap-x-5 md:gap-x-3"} gap-y-5 py-5`}>
          {results.map((result, index) => (
            <SingleResult azienda={result.azienda} ruolo={result.ruolo} prezzo={result.prezzo} descrizione={result.descrizione} logo={result.logo} posizione={result.posizione} key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchBox;