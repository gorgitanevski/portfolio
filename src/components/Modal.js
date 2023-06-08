import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children }) => {
  return <div className="absolute bg-red-500 h-screen w-full">{children}</div>;
};

export default Modal;
