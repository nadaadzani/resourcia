"use client";
import { Message } from "ai";
import { cn } from "@/lib/utils";
import { AIChatProps } from "@/utils/type";
import { useChat } from "ai/react";
import { IoMdCloseCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { GoDependabot } from "react-icons/go";
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

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const lastMsgUser = messages[messages.length - 1]?.role === "user";
  return (
    <div
      className={cn(
        "bottom-0 z-10 max-md:z-5 bg-gray-100 right-0 w-full p-1 xl:right-12 rounded-2xl max-md:w-full  max-w-[500px]",
        open ? "fixed" : "hidden"
      )}>
      <div className="flex rounded-xl p-2 justify-between">
        <p className="text-2xl p-3 max-md:hidden tracking-tight font-semibold">
          Resourcia^
        </p>
        <button
          onClick={onClose}
          className="mb-1 max-md:right-0 md:ms-auto-block">
          <IoMdCloseCircle size={35} className="md:p-3 mx-2 my--20" />
        </button>
      </div>
      <div className="bg-gray-100 shadow-lg flex flex-col h-[550px] ">
        <div ref={scrollRef} className=" h-full mt-3   overflow-y-auto">
          {messages.map((msg) => (
            <ChatMesage message={msg} key={msg.id} />
          ))}
          {isLoading && lastMsgUser && (
            <ChatMesage
              message={{
                role: "assistant",
                content: "typing...",
              }}
            />
          )}
          {!error && messages.length === 0 && (
            <div className="flex justify-center flex-col gap-3 h-full text-xl items-center">
              <GoDependabot size={35} />
              <p className=" font-[500] text-center">
                I am the chat bot you can ask here!
              </p>
            </div>
          )}
        </div>

        <div className="flex p-3">
          <button
            title="clear chat"
            className="px-1"
            onClick={() => setMessages([])}>
            <FaTrashAlt className="hover:text-red-600" size={25} />
          </button>
          <form className="flex m-3 w-full  gap-2" onSubmit={handleSubmit}>
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
    </div>
  );
};

export default AichatBot;

export const ChatMesage = ({
  message: { role, content },
}: {
  message: Pick<Message, "role" | "content">;
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
          isAssistant ? "text-black bg-gray-50" : "bg-[#1DE592] "
        )}>
        {content}
      </div>
    </div>
  );
};
