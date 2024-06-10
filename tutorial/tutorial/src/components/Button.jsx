import React from "react";

const Button = ({ children, clickHandler }) => {
  return (
    <button type="button" className="btn btn-primary" onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
