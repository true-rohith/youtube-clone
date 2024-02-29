import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../constant/Youtube";
import Avatar from "react-avatar";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { setMessage } from "../utils/chatSlice";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [singleVideo, setSingleVideo] = useState(null);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      console.log(res);
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = () => {
    dispatch(
      setMessage({
        name: "patel",
        message: input,
      })
    );
    setInput("");
  };
  useEffect(() => {
    getSingleVideo();
  }, []);

  return (
    <div className="flex justify-between ml-5 mt-2">
      <div>
        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold mt-2 text-lg">
          {singleVideo?.snippet?.title}
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-[35%]">
            <div className="flex">
              <Avatar
                src="https://imgs.search.brave.com/4k_yWYRhccChPWfTMlWrijxg3OuAg4jQRoeVdXe6-pA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHlw/aXguY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA4L2hh/Y2tlci1hdmF0YXIt/cHJvZmlsZS1waWN0/dXJlLXRoeXBpeC02/OC5qcGc"
                size={35}
                round={true}
              />
              <h1 className="font-bold m-2">
                {singleVideo?.snippet?.channelTitle}
              </h1>
            </div>
            <button className="px-4 py-1 font-medium bg-black text-white rounded-full">
              Subscribe
            </button>
          </div>
          <div className="flex items-center w-[40%] justify-between mt-2">
            <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
              <AiOutlineLike size={20} className="mr-5" />
              <AiOutlineDislike size={20} />
            </div>
            <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
              <RiShareForwardLine className="mr-2" size={20} />
              <p>Share</p>
            </div>
            <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
              <FiDownload size={20} className="mr-2" />
              <span>Download</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[100%] h-fit border border-gray-300 l-8 rounded-lg p-4 ">
          <div className="flex justify-between border border-t p-2">
            <h1>Top Chats</h1>
            <BsThreeDotsVertical />
          </div>
          <div className="overflow-y-auto h-[28rem] flex flex-col-reverse">
            <LiveChat />
          </div>
          <div className="flex items-center justify-between border border-t">
            <div className="flex items-center w-[90%]">
              <div>
                <Avatar
                  src="https://imgs.search.brave.com/4k_yWYRhccChPWfTMlWrijxg3OuAg4jQRoeVdXe6-pA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHlw/aXguY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA4L2hh/Y2tlci1hdmF0YXIt/cHJvZmlsZS1waWN0/dXJlLXRoeXBpeC02/OC5qcGc"
                  size={35}
                  round={true}
                />
              </div>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="ml-2 border-b border-b-gray-300 outline-none "
                type="text"
                placeholder="Send Message"
              />
              <div className="bg-gray-200 cursor-pointer p-2 rounded-full">
                <button>
                  <LuSendHorizonal onClick={sendMessage} size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
