import React from "react";
import ButttonList from "./ButttonList";
import VideoContainer from "./VideoContainer";

const Feed = () => {
  return (
    <div className="ml-5 mr-5 w-[80%] sm:w-[100%] sm:flex sm:flex-col sm:items-center sm:p-5 sm:mx-0">
      <ButttonList />
      <VideoContainer />
    </div>
  );
};

export default Feed;
