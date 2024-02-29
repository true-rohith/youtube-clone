import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn, CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { setCatergory, toggleSidebar } from "../utils/appSlice";
import { useState } from "react";

const Navbar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };

  const searchVideo = () => {
    dispatch(setCatergory(input));
    setInput("");
  };
  return (
    <div className="fixed w-full top-0 bg-white border-b-2">
      <div className="flex justify-between px-5 py-3">
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
        <div className="flex w-[40%] items-center">
          <div className="w-[100%] py-2 px-4 border outline-none border-gray-400 rounded-l-full">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search"
              type="text"
              className="w-full outline-none"
            />
          </div>
          <button
            onClick={searchVideo}
            className="py-2 px-4 border border-gray-400 rounded-r-full"
          >
            <CiSearch size={"24px"} />
          </button>
        </div>
        <div className="flex w-[10%] justify-between items-center">
          <IoIosNotificationsOutline size={24} className="cursor-pointer" />
          <CiVideoOn size={24} className="cursor-pointer" />
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
