import SearchBox from "./SearchBox";
import Suggestions from "./Suggestions";
import Results from "./Results";
import Image from "next/image";

const RightSection = () => {
    return (
        <div
            className="bg-white lg:h-full rounded-tl-[40px] h-3/4 lg:w-3/4 w-full lg:top-0 bottom-0 fixed lg:right-0 lg:left-auto rightSectionShadowLG"
        >
            <div className="w-full h-full">
                <div className="flex flex-row items-center justify-between py-10 px-5">
                    <div className="flex gap-5">
                        <div className="h-16 w-16 rounded-full bg-[#1F1695] mr-10"></div>
                        <div className="flex flex-col justify-center">
                            <h1 className="font-bold text-4xl">Cerca</h1>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="flex gap-32">
                            <div className="relative h-[70px] w-[70px] rounded-full bg-[#bbbbbb] flex items-center justify-center">
                                <Image
                                    src="/images/messaggi.svg"
                                    alt="Messaggi"
                                    width={40}
                                    height={40}
                                    className="z-1"
                                />
                                <div className="h-[35px] w-[35px] bg-[#1F1695] rounded-full absolute top-0 right-0"></div>
                            </div>
                            <div className="h-[70px] w-[70px] rounded-full bg-[#bbbbbb] flex items-center justify-center">
                                <Image
                                    src="/images/notifiche.svg"
                                    alt="Notifiche"
                                    width={50}
                                    height={40}
                                />
                            </div>
                            <Image
                                src="/images/profile.svg"
                                alt="Profilo"
                                width={70}
                                height={70}
                            />
                        </div>
                        <div className="flex flex-col px-7">
                            <h1 className="text-left font-bold">Federico Cervelli</h1>
                            <h2 className="text-left text-[#767676] text-[15px]">Lavoratore</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-full">
                    <SearchBox />
                    <Suggestions />
                    <Results />
                </div>
            </div>
        </div>
    );
};

export default RightSection;
