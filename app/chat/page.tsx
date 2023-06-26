"use client";

import { useChat } from "ai/react";
import UserIcon from "../components/icons/UserIcon";
import OpenAiIcon from "../components/icons/OpenAiIcon";
import PaperAirplaneIcon from "../components/icons/PaperAirplaneIcon";
import ChatBubble from "../components/ChatBubble";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full py-24">
      <div className="flex flex-col gap-3 w-full mx-auto">
        {messages.length > 0
          ? messages.map((message) => {
              const additionalStyles =
                message.role === "user" ? "justify-end" : "justify-start";

              return (
                <div className={`flex w-full px-5 ${additionalStyles}`}>
                  <ChatBubble content={message.content} sender={message.role} />
                </div>
              );
            })
          : null}
      </div>

      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 w-full max-w-md 2xl:max-w-[82rem] mx-auto container"
      >
        <div className="w-full max-w-xl mx-auto">
          <div className="relative">
            <input
              className="block bottom-0 w-full text-sm text-gray-900 pr-10 max-w-xl p-4 mb-8 border border-gray-300 rounded shadow-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={input}
              placeholder="Send a message"
              onChange={handleInputChange}
            />
            <div className="absolute text-gray-400 inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <PaperAirplaneIcon />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
