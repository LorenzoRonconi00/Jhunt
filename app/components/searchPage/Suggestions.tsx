const items = [
  {
    name: "Le tue Skill",
  },
  {
    name: "Backend Developer",
  },
  {
    name: "Frontend Developer",
  },
  {
    name: "Programmer",
  },
];

function SearchBox() {
  return (
    <>
      <div className="flex w-full py-5 ">
        <div className=" flex gap-10 mx-14">
          <div className="flex flex-col justify-center whitespace-nowrap">
            <h1 className="text-[16px] font-semibold text-[#767676]">Suggerimenti IA</h1>
          </div>
          <div className="flex gap-5">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center bg-[#dff4fb] rounded-[30px] whitespace-nowrap text-[#1f1695] px-7 py-2"
              >
                <h1 className="text-[18px] font-bold">{item.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBox;
