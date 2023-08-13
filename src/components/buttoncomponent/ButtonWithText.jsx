import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import TextAfterInput from "./TextAfterInput";
import "../../styles/buttonComponent/ButtonWithText.css";

const ButtonWithText = () => {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState("");

  return (
    <div className="container">
      <Input setName={setName} />
      <Button setShowName={setShowName} name={name} />
      {showName && <TextAfterInput showName={showName} />}
    </div>
  );
};

export default ButtonWithText;
