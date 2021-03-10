import React, { Component, useState } from "react";
import { render } from "react-dom";
import Button from "react-uikit-button";
import "./style.css";

///React Hooks
function Contador(props) {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <p>Conteo: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </div>
  );
}

export default function App() {
  return <Contador />;
}
