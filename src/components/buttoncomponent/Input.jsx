import React from "react";

const Input = ({ setName }) => {
  return <input type="text" onChange={(e) => setName(e.target.value)} />;
};

export default Input;
