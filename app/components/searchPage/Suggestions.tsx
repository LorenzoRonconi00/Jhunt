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
      className={`flex flex-col justify-center ${isClicked ? "bg-[#1f1695] text-white" : "bg-[#dff4fb] text-[#1f1695]"}  rounded-[30px] whitespace-nowrap px-7 py-2`}
    >
      <h1 className="text-[18px] font-bold">{name}</h1>
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
        <div className="flex gap-10 mx-14">
          <div className="flex flex-col justify-center whitespace-nowrap">
            <h1 className="text-[16px] font-semibold text-[#767676]">Suggerimenti IA</h1>
          </div>
          <div className="flex gap-5">
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
