import SearchBox from "./SearchBox";
import Suggestions from "./Suggestions";
import Results from "./Results";
import NavContent from "../NavContent";

const RightSection = () => {
    return (
        <div
            className="bg-white lg:h-full rounded-tl-[40px] h-3/4 lg:w-3/4 w-full lg:top-0 bottom-0 fixed lg:right-0 lg:left-auto rightSectionShadowLG"
        >
            <div className="w-full h-full">
                <NavContent content="Cerca"/>
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
