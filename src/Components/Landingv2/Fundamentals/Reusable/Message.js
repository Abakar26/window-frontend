import React from "react";

const Message = ({ message }) => {
  return (
    <div className="w-full flex h-[580px] justify-center items-center me-auto">
      <p>{message}</p>
    </div>
  );
};

export default Message;
