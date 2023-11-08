'use client';

const Hero = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center relative top-[-150px] md:top-[-300px]">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 md:mb-14" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Jhunt.</h1>
            <h2 className="text-lg md:text-4xl font-semibold text-center whitespace-normal break-words mb-6 md:mb-14 mx-5">L’assistente virtuale per la ricerca del tuo lavoro.</h2>
            <h3 className="text-base md:text-2xl font-light text-center whitespace-normal break-words mx-5">Risparmia tempo e sforzi nella tua ricerca del lavoro con l'IA avanzata.
                <br />Trova opportunità su misura per te oggi!</h3>
            <input type="text" placeholder="Cosa cerchi?" className="md:mt-8 mt-4 py-6 px-4 border-2 border-[#7676767b]"/>
        </div>
    );
}

export default Hero;