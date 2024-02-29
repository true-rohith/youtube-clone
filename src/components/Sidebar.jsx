import React from "react";
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import store from "../utils/store";
import { useSelector } from "react-redux";

const sidebarItems = [
  {
    icon: <CiHome size={"24px"} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icon: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icon: <CiHome size={"24px"} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icon: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icon: <CiHome size={"24px"} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icon: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icon: <CiHome size={"24px"} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icon: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icon: <CiHome size={"24px"} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icon: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icon: <CiHome size={"24px"} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icon: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icon: <CiHome size={"24px"} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icon: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icon: <CiHome size={"24px"} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icon: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icon: <CiHome size={"24px"} />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts size={"24px"} />,
    title: "Shorts",
  },
  {
    icon: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
];

const Sidebar = () => {
  // const open = false
  const open = useSelector((store) => store.app.open);
  return (
    <div
      className={` p-4 left-0 mr-5 w-[20%] overflow-y-scroll overflow-x-hidden h-[calc(100vh-5rem)] ${
        !open && "w-auto"
      } `}
    >
      {/* <div
        className={`absolute overflow-y-scroll overflow-x-hidden w-[100%] h-[calc(100vh-5rem)] ${
          !open && "w-auto"
        }`}
      > */}
      {sidebarItems.map((item, index) => {
        return (
          <div key={index} className="flex my-3 ">
            {item.icon}
            <p className={`ml-5 ${!open && "hidden"}`}>{item.title}</p>
          </div>
        );
      })}
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
