function SearchBox() {
  return <>
    <div className="flex w-full px-5 py-5 ">
        {/* Selector */}
        <button className="flex flex-col justify-center px-3 whitespace-nowrap bg-white rounded-l-lg border-2 border-[#7676767b] border-r-0">
            Da remoto
        </button>
        {/* Divider */}
        <div className="flex flex-col justify-center py-1 w-[2px] bg-white border-2 border-[#7676767b] border-r-0 border-l-0">
            <div className="w-full h-full bg-[#7676767b]"></div>
        </div>
        {/* Input */}
        <input placeholder="Che posizione cerchi?" className="w-full h-full py-3 px-3 bg-white border-2 border-[#7676767b] border-r-0 border-l-0">

        </input>
        {/* Search Button */}
        <div className="flex flex-col justify-center bg-[#1F1695] font-bold text-white text-center px-10 rounded-r-lg border-2 border-[#1F1695]">
            Trova
        </div>
    </div>
  
  </>;
}

export default SearchBox;
