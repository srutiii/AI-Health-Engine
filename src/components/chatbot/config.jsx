import { createChatBotMessage } from "react-chatbot-kit";

const botName="Health Assistant"

const config = {

  initialMessages: [createChatBotMessage(`Hello, I am your ${botName}. How may I assist you today.`)],
};

export default config;
