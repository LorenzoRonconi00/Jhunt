"use client";

import Image from "next/image";
import { useState } from "react";
import {DownOutlined} from "@ant-design/icons";

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
    descrizione:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus",
    logo: "images/microsoft.svg",
    posizione: "Washington, America",
  },
  {
    azienda: "Microsoft Team",
    ruolo: "Programmatore Junior C#",
    prezzo: "€ 55.000 - € 65.000",
    descrizione:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus",
    logo: "images/microsoft.svg",
    posizione: "Washington, America",
  },
  {
    azienda: "Microsoft Team",
    ruolo: "Programmatore Junior C#",
    prezzo: "€ 55.000 - € 65.000",
    descrizione:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus",
    logo: "images/microsoft.svg",
    posizione: "Washington, America",
  },
  {
    azienda: "Microsoft Team",
    ruolo: "Programmatore Junior C#",
    prezzo: "€ 55.000 - € 65.000",
    descrizione:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus",
    logo: "images/microsoft.svg",
    posizione: "Washington, America",
  },
  {
    azienda: "Microsoft Team",
    ruolo: "Programmatore Junior C#",
    prezzo: "€ 55.000 - € 65.000",
    descrizione:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus",
    logo: "images/microsoft.svg",
    posizione: "Washington, America",
  },
  {
    azienda: "Microsoft Team",
    ruolo: "Programmatore Junior C#",
    prezzo: "€ 55.000 - € 65.000",
    descrizione:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus",
    logo: "images/microsoft.svg",
    posizione: "Washington, America",
  },
  {
    azienda: "Microsoft Team",
    ruolo: "Programmatore Junior C#",
    prezzo: "€ 55.000 - € 65.000",
    descrizione:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus",
    logo: "images/microsoft.svg",
    posizione: "Washington, America",
  },
  {
    azienda: "Microsoft Team",
    ruolo: "Programmatore Junior C#",
    prezzo: "€ 55.000 - € 65.000",
    descrizione:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus",
    logo: "images/microsoft.svg",
    posizione: "Washington, America",
  },
  {
    azienda: "Microsoft Team",
    ruolo: "Programmatore Junior C#",
    prezzo: "€ 55.000 - € 65.000",
    descrizione:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risusdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    logo: "images/microsoft.svg",
    posizione: "Washington, America",
  },
]

function SearchBox() {
  const risultati = 5;

  const [clickedButtons, setClickedButtons] = useState(1);

  const handleClickColumns = () => {
    setClickedButtons(1);
  };

  const handleClickRows = () => {
    setClickedButtons(2);
  }

  return (
    <>
      <div className="w-full h-full px-10 py-5 bg-white rounded-t-[30px] rightSectionShadow">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-black text-[18px] font-bold">{risultati} risultati di annunci</h1>
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
        {/* divisore */}
        <div className="w-full h-[1px] bg-black/25 my-5"></div>
        <div className={`flex ${clickedButtons === 1 ? "flex-col" : "grid grid-cols-2 gap-x-5"} overflow-y-auto gap-y-5 py-5 lg:max-h-[730px] md:max-h-[500px] xl:max-h-[800px]`}>
          {results.map((result, index) => (
            <SingleResult
              azienda={result.azienda}
              ruolo={result.ruolo}
              prezzo={result.prezzo}
              descrizione={result.descrizione}
              logo={result.logo}
              posizione={result.posizione}
              key={index}
            />
          ))}
        </div>
      </div>
      {/* <Footer /> */}
      <div className="absolute bg-white w-full md:h-[50px] bottom-0 rounded-t-[30px] rightSectionShadow">
            <div className="flex justify-center items-center h-full">
              <DownOutlined />
            </div>
      </div>
    </>
  );
}

export default SearchBox;
