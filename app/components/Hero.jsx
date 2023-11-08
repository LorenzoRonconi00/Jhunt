"use client";

const Hero = () => {
  return (
    <div className="z-10 h-screen flex flex-col justify-center items-center relative">
      <h1
        className="text-5xl md:text-6xl lg:text-8xl font-bold"
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
      >
        Jhunt.
      </h1>
      <h2 className="text-lg md:text-4xl font-semibold text-center whitespace-normal break-words">
        L’assistente virtuale per la ricerca del tuo lavoro.
      </h2>
      <h3 className="text-base md:text-2xl font-light text-center whitespace-normal break-words">
        Risparmia tempo e sforzi nella tua ricerca del lavoro con l'IA avanzata.
        <br />
        Trova opportunità su misura per te oggi!
      </h3>
      <div className="flex flex-row justify-center items-center w-full max-w-2xl">
        <input
          type="text"
          placeholder="Cosa cerchi?"
          className="w-full font-light border-2 border-[#7676767b] border-r-0 p-2"
        />
        <button className="bg-[#1F1695] h-full text-white font-bold text-center px-5 border-2 border-[#1F1695] border-l-0">
          Trova
        </button>
      </div>
      <div className="flex flex-row justify-center items-center cursor-pointer">
        <h3 className="text-lg md:text-3xl font-semibold text-[#F95225] mr-2 md:mr-4">
          Filtri
        </h3>
        <img
          src="/images/red-arrow.png"
          alt="Filtri"
          className="w-[18px] md:w-[22px]"
        />
      </div>
    </div>
  );
};

export default Hero;
