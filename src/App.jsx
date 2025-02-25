import "./App.css";
import React from "react";
import Carta1 from "./imagens/carta1.png";
import Carta2 from "./imagens/carta2.png";

function ContadorTruco() {

  return (
    <div className="contadorTruco">
      <h1>Contador de Truco</h1>
      <p>
        "Time A Venceu!"
      </p>
      <div className="timesContainer">
        <div className="timeCard">
          <h2>Time A: 12</h2>
          <img src={Carta1} alt="Carta Time A" />
        </div>
        <div className="timeCard">
          <h2>Time B: 0</h2>
          <img src={Carta2} alt="Carta Time B" />
        </div>
      </div>
    </div>
  );
}

export default ContadorTruco;
