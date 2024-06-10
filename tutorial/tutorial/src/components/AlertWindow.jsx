import React from "react";

const AlertWindow = ({ onClick }) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      Alert Window Baby
      <button type="button" className="btn-close" onClick={onClick}></button>
    </div>
  );
};

export default AlertWindow;
