import React from "react";
import "../../styles/buttonComponent/TextAfterInput.css";

const TextAfterInput = ({ showName }) => {
  return <div className="textAfterInput">Невероятно! Вы - {showName}</div>;
};

export default TextAfterInput;
