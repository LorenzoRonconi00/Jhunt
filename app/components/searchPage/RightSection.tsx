import SearchBox from "./SearchBox";
import Suggestions from "./Suggestions";
import Results from "./Results";
import NavContent from "../NavContent";
import FooterSmall from "./FooterSmall";

const RightSection = () => {
    return (
        <div
            className="bg-white h-full xl:rounded-tl-[40px] w-full xl:top-0 bottom-0 fixed xl:right-0 xl:left-auto rightSectionShadowLG"
        >
            <div className="w-full h-full">
                <div className="flex flex-col h-full">
                    
                    <div className="xl:hidden md:-bottom-[50px] lg:-bottom-[80px]  lg:h-[200px] md:h-[150px] md:w-[800px] lg:mx-24 relative -z-10">
                        <FooterSmall />
                    </div>
                    <Results />
                </div>
            </div>
        </div>
    );
};

export default RightSection;
