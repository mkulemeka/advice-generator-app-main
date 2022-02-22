import React, { useState, useEffect } from "react";
import { BsFillPauseFill } from "react-icons/bs";
import "./main.scss";
import dice from './images/icon-dice.svg';

const App = () => {
  const [advice, setAdvice] = useState("");
  const [id, setID] = useState(1);
  const URL = `https://api.adviceslip.com/advice/${id}`;
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip);
      });
  }, [id]);

  const getQuote = () => {
    let randomId = Math.floor(Math.random() * 220);
    setID(randomId);
  };
  console.log(id);

  return (
    <div className="app">
      <div className="advice__container">
        <div className="advice__container-id">Advice #{advice.id}</div>
        <div className="advice__container-text">{advice.advice}</div>
        <div className="advice__container-hashtag">
          <hr />
          <span className="tag">
            <BsFillPauseFill />
          </span>
          <hr />
        </div>
        <div className="dice" onClick={getQuote}>
          <img src={dice} className="die" alt="Dice" />
        </div>
      </div>
    </div>
  );
};

export default App;
