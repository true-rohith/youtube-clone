import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn, CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import {
  setCatergory,
  setSearchSuggestion,
  toggleSidebar,
} from "../utils/appSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { SEARCH_SUGGESTION_API } from "../constant/Youtube";

const Navbar = () => {
  const [suggestion, setSuggestion] = useState(false);
  const { searchSuggestion } = useSelector((store) => store.app);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };

  const searchVideo = () => {
    dispatch(setCatergory(input));
    setInput("");
  };

  const showSUggestion = async () => {
    try {
      const res = await axios.get(SEARCH_SUGGESTION_API + input);
      dispatch(setSearchSuggestion(res?.data[1]));
    } catch (error) {
      console.log(error);
    }
  };

  const openSuggestion = () => {
    setSuggestion(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showSUggestion();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);
  return (
    <div className="fixed w-full top-0 bg-white border-b-2">
      <div className="flex justify-between px-5 py-3 sm:px-2">
        <div className="flex items-center ">
          <GiHamburgerMenu
            className="cursor-pointer"
            onClick={toggleHandler}
            size="24px"
          />
          <img
            width={"115px"}
            className="px-4"
            src="https://imgs.search.brave.com/xAdTWo2vVZOF2iHqMitANyNdzSuL55adCiqqbo0hLsg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1NjUwMTI1/NXlvdXR1YmUtbG9n/by1wbmcucG5n"
            alt="yt_logo"
          />
        </div>
        <div className="flex w-[40%] items-center sm:w-[30%]">
          <div className="flex w-[100%]">
            <input
              onFocus={openSuggestion}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search"
              type="text"
              className="w-full py-2 px-4 border border-gray-400 rounded-l-full outline-none"
            />

            <button
              onClick={searchVideo}
              className="py-2 px-4 border border-gray-400 rounded-r-full"
            >
              <CiSearch size={"24px "} />
            </button>
          </div>
          {suggestion && searchSuggestion.length !== 0 && (
            <div className="absolute top-3 z-50 w-[30%] bg-white shadow-lg mt-12 rounded-lg border border-gray-200">
              <ul>
                {searchSuggestion.map((text, idx) => {
                  return (
                    <div
                      className="flex item-center px-4 hover:bg-gray-100"
                      key={idx}
                    >
                      <CiSearch size={"24px"} />
                      <li className="px-2 py-1 cursor-pointer text-md font-medium">
                        {text}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div className="flex w-[10%] justify-between items-center sm:w-[20%]">
          <IoIosNotificationsOutline size={24} className="cursor-pointer " />
          <CiVideoOn size={24} className="cursor-pointer sm:hidden" />
          <Avatar
            src="https://imgs.search.brave.com/4k_yWYRhccChPWfTMlWrijxg3OuAg4jQRoeVdXe6-pA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHlw/aXguY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA4L2hh/Y2tlci1hdmF0YXIt/cHJvZmlsZS1waWN0/dXJlLXRoeXBpeC02/OC5qcGc"
            size={35}
            round={true}
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
