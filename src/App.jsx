import "./App.css";
import React from "react";
import Carta1 from "./imagens/carta1.png";
import Carta2 from "./imagens/carta2.png";

function ContadorTruco() {
  // Pontuações fixas
  const pontuacaoTimeA = 6;
  const pontuacaoTimeB = 9;

  return (
    <div className="contadorTruco">
      <h1>Contador de Truco</h1>
      <p>
        "Time A Venceu!"
      </p>
      <div className="timesContainer">
        <div className="timeCard">
          <h2>Time A: {pontuacaoTimeA}</h2>
          <img src={Carta1} alt="Carta Time A" />
          <div className="buttonGroup">
            <button className="botaoCard" disabled>+1</button>
            <button className="botaoCard" disabled>+3</button>
            <button className="botaoCard" disabled>-1</button>
          </div>
        </div>
        <div className="timeCard">
          <h2>Time B: {pontuacaoTimeB}</h2>
          <img src={Carta2} alt="Carta Time B" />
          <div className="buttonGroup">
            <button className="botaoCard" disabled>+1</button>
            <button className="botaoCard" disabled>+3</button>
            <button className="botaoCard" disabled>-1</button>
          </div>
        </div>
      </div>
      <button className="resetButton" disabled>Resetar Pontuação</button>
    </div>
  );
}

export default ContadorTruco;
