"use client";
import { useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import AichatBot from "./AichatBot";
const AIChatButton = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <button
        className="bottom-0 py-6 px-5 md:-translate-x-9 fixed right-0 z-2"
        onClick={() => setChatOpen(true)}>
        <IoChatbubbleEllipsesOutline className="text-6xl max-md:text-4xl" />
      </button>
      <AichatBot open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
};

export default AIChatButton;
