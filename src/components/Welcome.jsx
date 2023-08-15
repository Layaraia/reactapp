import React from "react";
import { MAGE } from "../const/MAGE";

const Welcome = () => {
  return (
    <div>
      <div>
      <img src={MAGE} alt="cool mage" />
      </div>
      <div>
        <h1>Вы посетили сайт Загадочной Гадалки!</h1>
        <h2>Здесь вы можете узнать о себе всю правду.</h2>
        <h3>Введите свое имя в поле ниже</h3>
      </div>
    </div>
  );
};

export default Welcome;
