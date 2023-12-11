'use client';

import React, { useState } from "react";

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
  {
    name: "Programmer",
  },
  {
    name: "Programmer",
  },
  {
    name: "Programmer",
  },
  {
    name: "Programmer",
  },
];

interface buttonSuggestionsProps {
  key: number;
  name: string;
  handleClick: () => void;
  isClicked: boolean;
}

const ButtonSuggestions: React.FC<buttonSuggestionsProps> = ({
  key,
  name,
  handleClick,
  isClicked
}) => {
  return (
    <div
      key={key}
      onClick={handleClick}
      className={`flex flex-col justify-center ${isClicked ? "bg-[#1f1695] text-white" : "bg-[#dff4fb] text-[#1f1695]"}  rounded-[30px] whitespace-nowrap xl:px-7 md:px-5 py-2
      cursor-pointer`}
    >
      <h1 className="xl:text-[18px] md:text-[16px] font-bold">{name}</h1>
    </div>
  )
}

function Suggestions() {
  const [clickedButtons, setClickedButtons] = useState(new Array(items.length).fill(false));

  const handleClick = (index: number) => {
    const updatedButtons = [...clickedButtons];
    updatedButtons[index] = !updatedButtons[index];
    setClickedButtons(updatedButtons);
  }

  return (
    <>
      <div className="flex w-full py-5">
        <div className="flex xl:gap-10 md:gap-6 xl:mx-14 md:mx-10">
          <div className="flex flex-col justify-center whitespace-nowrap">
            <h1 className="md:text-[16px] font-semibold text-[#767676]">Suggerimenti IA</h1>
          </div>
          <div className="flex md:gap-5 overflow-x-scroll md:w-[600px] lg:w-[800px] xl:w-full">
            {items.map((item, index) => (
              <ButtonSuggestions
                key={index}
                name={item.name}
                handleClick={() => handleClick(index)}
                isClicked={clickedButtons[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


export default Suggestions;
