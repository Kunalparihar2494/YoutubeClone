import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utility/chatSlice";
import { generateName, generateRandomText } from "../utility/constant";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessages, setLiveMessages] = useState("");

  useEffect(() => {
    const chats = setInterval(() => {
      dispatch(
        addMessages({
          name: generateName(),
          message: generateRandomText(20) + "🥊🚀🤘",
        })
      );
    }, 2000);

    return () => clearInterval(chats);
  }, []);

  const handleClick = () => {
         dispatch(addMessages({
            name:'Kunal',
            message:liveMessages
          }))
          setLiveMessages('');
  };

  return (
    <>
      <div className="h-[590px] mt-2 p-4 bg-slate-200 border border-black rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages &&
          chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
      </div>
      <form
        className="p-2 m-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={liveMessages}
          className="w-10/12 px-2 mx-2 border border-black"
          onChange={(e) => setLiveMessages(e.target.value)}
        />
        <button className="px-2 mx-4 bg-green-500" onClick={handleClick}>
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
