import React from "react";
import "../../styles/buttonComponent/Input.css";

const Input = ({ setName }) => {
  return (
  <input 
  className="inputText"
  type="text" 
  onChange={(e) => setName(e.target.value)} 
  />
  )
};

export default Input;
