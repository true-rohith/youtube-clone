import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCatergory } from "../utils/appSlice";

const buttonList = [
  "All",
  "Javascript",
  "Live",
  "Music",
  "Song",
  "Vlogs",
  "Trending",
  "Programming",
  "News",
  "Technology",
  "Cricket",
  "Comedy",
  "Thriller",
  "New for you",
  "Computer Programming",
];

const ButttonList = () => {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();
  const videoByTag = (tag) => {
    if (active !== tag) {
      dispatch(setCatergory(tag));
      setActive(tag);
    }
  };
  return (
    <div className="flex w-[100%] py-2 overflow-x-scroll no-scrollbar">
      {buttonList.map((item, index) => {
        return (
          <div key={index}>
            <button
              onClick={() => {
                videoByTag(item);
              }}
              className={`${
                active === item ? "bg-slate-900 text-white" : "bg-gray-200"
              } font-medium mx-2 px-4 py-1 rounded-md`}
            >
              <span className="whitespace-nowrap">{item}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ButttonList;
