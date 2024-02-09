import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import React, { useState } from "react";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

function Chattbot() {
  const [isChatbotVisible, setChatbotVisibility] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisibility(!isChatbotVisible);
  };
  return (
    <div>
      {/* chatbot icon */}
      <button
        className="fixed bottom-6 right-4 w-14 bg-blue-200 p-2 rounded-full cursor-pointer transform transition duration-100 ease-in-out hover:scale-110 z-10"
        onClick={toggleChatbot}
      >
        <img src="src/assets/chatbot-icon.png" alt="img" />
      </button>
      <div className="fixed z-10 bottom-20 right-10 scrollbar-hide">
        {isChatbotVisible && (
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        )}
      </div>
    </div>
  );
}

export default Chattbot;
