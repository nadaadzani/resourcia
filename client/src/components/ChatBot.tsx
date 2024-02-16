

const ChatbotComponent = () => {
  const embeddedChatbotConfig = {
    chatbotId: "BVTJmnpC9S-c_V7JlTxDV",
    domain: "www.chatbase.co"
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: `
        window.embeddedChatbotConfig = {
          chatbotId: "${embeddedChatbotConfig.chatbotId}",
          domain: "${embeddedChatbotConfig.domain}"
        };
      ` }} defer />
      <script
        src="https://www.chatbase.co/embed.min.js"
        defer
      ></script>
    </>
  );
};

export default ChatbotComponent;
