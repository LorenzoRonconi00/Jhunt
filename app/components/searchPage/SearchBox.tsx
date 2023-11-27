import Image from "next/image";

function SearchBox() {
  return <>
    <div className="flex w-full md:px-5 md:py-5">
      {/* Info Location */}
      <div className="flex flex-row justify-center items-center md:px-10 xl:gap-5 md:gap-3 whitespace-nowrap rounded-l-lg border-[2px] border-[#7676767b] border-r-0">
        <div className="xl:w-[40px] xl:h-[40px] md:w-[30px] md:h-[30px]">
          <Image
            src="/images/pin.svg"
            alt="Pin"
            width={40}
            height={40}
          />
        </div>
        <h1 className="flex items-center md:text-[20px] font-semibold text-[#1F1695]">Da Remoto</h1>
      </div>
      {/* Divider */}
      <div className="flex flex-col justify-center py-1 w-[2px] bg-white border-[2px] border-[#7676767b] border-r-0 border-l-0">
        <div className="w-full h-full bg-[#7676767b]"></div>
      </div>
      {/* Input */}
      <input placeholder="Che posizione cerchi?" className="w-full h-full xl:py-6 xl:px-3 md:py-5 md:px-2 bg-white border-[2px] border-[#7676767b] border-r-0 border-l-0 md:text-[17px]">
      </input>
      {/* Search Button */}
      <div className="flex flex-col justify-center bg-[#1F1695] text-center xl:px-20 md:px-16 rounded-r-lg border-2 border-[#1F1695]">
        <h1 className="md:text-[20px] font-bold text-white">Trova</h1>
      </div>
    </div>

  </>;
}

export default SearchBox;
