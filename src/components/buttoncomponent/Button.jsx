import React from "react";

const Button = ({ name, setShowName }) => {
  return <button onClick={() => setShowName(name)}>Предсказать!</button>;
};

export default Button;
