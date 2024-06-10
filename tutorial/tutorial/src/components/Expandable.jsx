import React from "react";
import { useState } from "react";

const Expandable = ({ children, l }) => {
  const [summarize, setSummarize] = useState(false);
  const sum = summarize;
  const More = "More";
  const Less = "Less";
  function onClick() {
    setSummarize(!summarize);
  }
  return (
    <>
      <div>{!summarize ? children : children.slice(0, 10)}</div>{" "}
      <button onClick={onClick}>{!summarize ? Less : More}</button>
    </>
  );
};

export default Expandable;
