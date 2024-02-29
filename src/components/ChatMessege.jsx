import React from "react";
import Avatar from "react-avatar";

function ChatMessege({ item }) {
  return (
    <div className="flex items-center">
      <div>
        <Avatar
          src="https://imgs.search.brave.com/4k_yWYRhccChPWfTMlWrijxg3OuAg4jQRoeVdXe6-pA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHlw/aXguY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA4L2hh/Y2tlci1hdmF0YXIt/cHJvZmlsZS1waWN0/dXJlLXRoeXBpeC02/OC5qcGc"
          size={25}
          round={true}
        />
      </div>
      <div className="flex items-center">
        <h1 className="ml-2 font-bold text-sm">{item.name}</h1>
        <p className="ml-2 py-2 text-sm">{item.message}</p>
      </div>
    </div>
  );
}

export default ChatMessege;
