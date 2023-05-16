import React from "react";
import { useContext } from "react";

import "./Welcome.css";
import Quiz from "../images/quiz.svg";
import { QuizContext } from "../context/quiz";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem vindo!</h2>
      <p>Clique abaixo para iniciar</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Inicio Quiz" />
    </div>
  );
};

export default Welcome;
