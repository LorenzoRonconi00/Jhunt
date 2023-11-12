"use client";

import { ConfigProvider, Switch } from "antd";
import { useState } from "react";
import { useRouter } from "next/navigation";


const filtri = [
  {
    name: "Lavora da Remoto",
  },
  {
    name: "Orario Flessibile",
  },
  {
    name: "Sedi Internazionali"
  }
]


const Hero = () => {

  const router = useRouter();
  const [checked, setChecked] = useState(false);

  const toggle = () => {
    setChecked(!checked);
  }


  return (
    <div className="z-10 h-screen flex flex-col justify-start md:justify-center pt-[90px] md:pt-0 items-center relative px-5">
      {/**Title */}
      <h1
        className="text-7xl md:text-8xl font-bold mb-2"
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
      >
        Jhunt.
      </h1>
      {/**Subtitles */}
      <h2 className="text-2xl md:text-4xl  font-semibold text-center whitespace-normal break-words mb-5">
        Il tuo assistente virtuale per la ricerca del lavoro.
      </h2>
      <h3 className="hidden md:block text-base md:text-2xl font-light text-center whitespace-normal break-words mb-10">
        Risparmia tempo e sforzi nella tua ricerca del lavoro con la IA avanzata.
        <br />
        Trova opportunità su misura per te oggi!
      </h3>
      {/**Search Bar */}
      <div className="flex flex-row justify-center items-center w-full max-w-2xl">
        <input
          type="text"
          placeholder="Cosa cerchi?"
          className="w-full font-light border-2 border-[#7676767b] border-r-0 rounded-l-[10px] p-4 md:p-6"
        />
        <button 
        onClick={() => router.push("/search")}
        className="bg-[#1F1695] h-full text-white text-[16px] md:text-[24px] font-bold text-center px-8 md:px-16 border-2 border-[#1F1695] rounded-r-[10px] border-l-0">
          Trova
        </button>
      </div>
      {/**Filtri */}
      <div className="flex flex-row justify-center items-center cursor-pointer mt-5" onClick={toggle}>
        <h3 className="text-lg md:text-2xl font-semibold text-[#F95225] mr-2">
          Filtri
        </h3>
        <img
          src="/images/red-arrow.png"
          alt="Filtri"
          className="w-[18px] md:w-[22px]"
        />
      </div>
      {checked && (
        <div className="mt-3 md:mt-5">
          <div className="w-[300px] h-[220px] md:w-[476px] md:h-[317px] bg-[#EBEBEB] border-[1px] border-black/20 flex flex-col justify-center rounded-[30px]">
            {filtri.map((item, index) => (
              <div key={index} className="flex flex-row justify-between px-10 py-3 md:py-5">
                <h1 className="text-base md:text-xl font-semibold text-[#4F5E72]">{item.name}</h1>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#1f1695",
                    },
                  }}>
                  <Switch defaultChecked={false} />
                </ConfigProvider>
              </div>
            ))}
            <div className="mx-auto py-2 md:py-4 -mb-2 md:-mb-5">
              <button className="w-24 h-8 md:w-32 md:h-10 bg-[#1f1695] text-white font-semibold text-lg rounded-[10px]" onClick={toggle}>Applica</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
