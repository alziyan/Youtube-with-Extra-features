import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName, sentence } from "./../utils/helper";

const LiveChat = () => {
  const [liveMessages, setLiveMessages] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: sentence(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="p-2 ml-2 border border-black w-full h-[550px] rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-1 m-2 border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form Submit " + liveMessages);
          dispatch(
            addMessage({
              name: "Alziyan Ansari",
              message: liveMessages,
            })
          );
          setLiveMessages("");
        }}
      >
        <input
          className="w-96 p-2"
          type="text"
          value={liveMessages}
          onChange={(e) => setLiveMessages(e.target.value)}
        />
        <button className=" px-2 bg-green-200 border border-black rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
