import Image from "next/image";

function SearchBox() {
  return <>
    <div className="flex w-full px-5 py-5 ">
      {/* Info Location */}
      <div className="flex flex-row justify-center px-10 gap-5 whitespace-nowrap rounded-l-lg border-[2px] border-[#7676767b] border-r-0 overflow-hidden">
        <Image 
        src="/images/pin.svg"
        alt="Pin"
        width={40}
        height={40}
        />
        <h1 className="flex items-center text-[20px] font-semibold text-[#1F1695]">Da Remoto</h1>
      </div>
      {/* Divider */}
      <div className="flex flex-col justify-center py-1 w-[1px] bg-white border-[2px] border-[#7676767b] border-r-0 border-l-0">
        <div className="w-full h-full bg-[#7676767b]"></div>
      </div>
      {/* Input */}
      <input placeholder="Che posizione cerchi?" className="w-full h-full py-6 px-3 bg-white border-[2px] border-[#7676767b] border-r-0 border-l-0 text-[17px]">
      </input>
      {/* Search Button */}
      <div className="flex flex-col justify-center bg-[#1F1695] text-center px-20 rounded-r-lg border-2 border-[#1F1695]">
        <h1 className="text-[20px] font-bold text-white">Trova</h1>
      </div>
    </div>

  </>;
}

export default SearchBox;
