import SearchBox from "./SearchBox";
import Suggestions from "./Suggestions";
import Results from "./Results";
import NavContent from "../NavContent";
import FooterSmall from "./FooterSmall";

const RightSection = () => {
    return (
        <div
            className="bg-white h-full xl:rounded-tl-[40px] xl:w-3/4 w-full xl:top-0 bottom-0 fixed xl:right-0 xl:left-auto rightSectionShadowLG"
        >
            <div className="w-full h-full">
                <NavContent content="Cerca"/>
                <div className="flex flex-col h-full">
                    <SearchBox />
                    <Suggestions />
                    <div className="xl:hidden -bottom-[180px] relative md:mx-28 -z-10">
                        <FooterSmall />
                    </div>
                    <Results />
                </div>
            </div>
        </div>
    );
};

export default RightSection;
