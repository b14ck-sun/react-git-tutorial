import { useState } from "react";

function Messages() {
  const [messages, setMessages] = useState([
    "Message 1",
    "Message 2",
    "Message 3",
  ]);
  return (
    <>
      <h1>ChatBot Home Page</h1>
      <ul>
        {messages.map((m) => (
          <h1>{m}</h1>
        ))}
      </ul>
    </>
  );
}

export default Messages;
