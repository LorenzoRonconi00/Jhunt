import SearchBox from "./SearchBox";
import Suggestions from "./Suggestions";
import Results from "./Results";

const RightSection = () => {
  return (
    <div
      className="bg-white lg:h-full h-3/4 lg:w-3/4 w-full lg:top-0 bottom-0 fixed lg:right-0 lg:left-auto 
        lg:rightSectionShadowLG rightSectionShadow"
    >
      <div className="w-full h-full">
        <div className="flex flex-row justify-between py-5 px-5">
          <div className="flex gap-5">
            <div className="h-12 w-12 rounded-full bg-[black]"></div>
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-3xl">Cerca</h1>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col mr-3">
              <h1 className=" text-right">Lavoratore</h1>
              <h2 className=" text-right font-bold">Federico Cervelli</h2>
            </div>
            <div className="h-12 w-12 rounded-full bg-[black]"></div>
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
