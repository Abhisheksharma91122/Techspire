import React, { useState } from "react";
import { Send } from "lucide-react";

const ChatbotPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "Hello! How can I assist you?", sender: "bot" }]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Chatbot</h1>
      <div className="flex-1 overflow-y-auto bg-white shadow-md rounded-lg p-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 p-2 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-green-500 text-white self-end" : "bg-gray-300 text-black self-start"}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="ml-2 p-2 bg-green-500 text-white rounded-lg flex items-center">
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatbotPage;
