'use client';

const Hero = () => {
    return (
        <div className="z-10 h-screen flex flex-col justify-center items-center relative -mt-[80px] lg:-mt-[200px]">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 md:mb-14" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Jhunt.</h1>
            <h2 className="text-lg md:text-4xl font-semibold text-center whitespace-normal break-words mb-6 md:mb-14 mx-5">L’assistente virtuale per la ricerca del tuo lavoro.</h2>
            <h3 className="text-base md:text-2xl font-light text-center whitespace-normal break-words mx-5">Risparmia tempo e sforzi nella tua ricerca del lavoro con l'IA avanzata.
                <br />Trova opportunità su misura per te oggi!</h3>
            <div className="flex flex-row justify-center items-center md:mt-12 mt-12 mb-6 md:mb-12">
                <input type="text" placeholder="Cosa cerchi?" className="h-12 w-56 md:h-24 md:w-[520px] pl-3 md:pl-10 text-sm md:text-xl font-light border-2 md:border-[3px] border-[#7676767b] border-r-0 md:border-r-0" />
                <button className="bg-[#1F1695] text-white text-base md:text-3xl font-bold text-center h-12 w-28 md:w-64 md:h-24 border-2 border-[#1F1695] border-l-0">Trova</button>
            </div>
            <div className="flex flex-row justify-center items-center cursor-pointer">
                <h3 className="text-lg md:text-3xl font-semibold text-[#F95225] mr-2 md:mr-4">Filtri</h3>
                <img src="/images/red-arrow.png" alt="Filtri" className="w-[18px] md:w-[22px]" />
            </div>
        </div>
    );
}

export default Hero;