import React from "react";
import "../../styles/buttonComponent/Button.css";

const Button = ({ name, setShowName }) => {
  return <button id="superbutton" onClick={() => setShowName(name)}>Предсказать!</button>;
};

export default Button;
