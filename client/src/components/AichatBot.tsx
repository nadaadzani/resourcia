"use client";
import { Message } from "ai";
import { cn } from "@/lib/utils";
import { AIChatProps } from "@/utils/type";
import { useChat } from "ai/react";
import { IoMdCloseCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";

const AichatBot = ({ open, onClose }: AIChatProps) => {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat();
  const lastMsgUser = messages[messages.length-1]?.role==="assistant"
  return (
    <div
      className={cn(
        "bottom-0 z-10 bg-gray-100 right-0 w-full p-1 xl:right-12 rounded-2xl max-md:w-full  max-w-[500px]",
        open ? "fixed" : "hidden"
      )}>
      <div className="flex rounded-xl p-2 justify-between">
        <p className="text-2xl p-3 tracking-tight font-semibold">Resourcia^</p>
        <button onClick={onClose} className="mb-1 ms-auto-block">
          <IoMdCloseCircle size={35} className="m-3" />
        </button>
      </div>
      <div className="bg-gray-100 shadow-lg flex flex-col h-[550px] ">
        <div className=" h-full mt-3  overflow-y-auto">
          {messages.map((msg) => (
            <ChatMesage message={msg} key={msg.id} />
          ))}
        </div>
        <form className="m-3 flex gap-1" onSubmit={handleSubmit}>
          <button className="px-1" onClick={() => setMessages([])}>
            <FaTrashAlt className="hover:text-red-600" size={30} />
          </button>
          <input
            value={input}
            onChange={handleInputChange}
            className=" border-[0.5px] rounded-sm bg-white border-gray-500 px-3 w-full"
            placeholder="type here..."
            required
          />
          <button
            type="submit"
            className="bg-black text-white hover:bg-white hover:text-black py-2 px-4 rounded-md">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AichatBot;

// import React from 'react'

export const ChatMesage = ({
  message: { role, content },
}: {
  message: Message;
}) => {
  const isAssistant = role === "assistant";
  return (
    <div
      className={cn(
        "mb-3 flex items-center px-3",
        isAssistant ? "justify-start me-4" : "justify-end ms-4"
      )}>
      <div
        className={cn(
          "whitespace-pre-line rounded-md border px-3 py-2",
          isAssistant ? "text-black bg-gray-50" : "bg-black text-white"
        )}>
        {content}
      </div>
    </div>
  );
};
