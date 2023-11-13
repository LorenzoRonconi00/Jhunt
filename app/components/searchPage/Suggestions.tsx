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
        <div className=" flex gap-10 mx-10">
          <div className="flex flex-col justify-center whitespace-nowrap">
            <h1>Suggerimenti IA</h1>
          </div>
          <div className="flex gap-5">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center bg-[#dff4fb] whitespace-nowrap text-[#1f1695] px-5 py-1 rounded-lg"
              >
                <h1>{item.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBox;
