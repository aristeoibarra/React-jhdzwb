import React, { Component } from "react";
import { render } from "react-dom";

import Button from "react-uikit-button";
import "./style.css";

// Componenentes de clase (State)
class Contador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0
    };
  }

  aumentar = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  };

  render() {
    return (
      <div>
        <br />
        <p>{this.state.contador}</p>
        <Button onClick={this.aumentar}> Aumentar</Button>
      </div>
    );
  }
}

//Componente funcional (props)
function A(props) {
  //return <p>Hello! {props.name}</p>;
  return props.children;
}

function B(props) {
  return <p>Bye! {props.name}</p>;
}

function C(props) {
  return (
    <p>
      Name = {props.name} , Age = {props.age}
    </p>
  );
}

/// Componentes
function MiComponente() {
  return <p>Hello World</p>;
}

class MiComponenteDeClase extends Component {
  render() {
    return <p>Hello, This a class</p>;
  }
}

export default function App() {
  let name = "Aristeo";
  return (
    <div>
      <MiComponente />
      <MiComponenteDeClase />
      <p>------------------------------</p>
      <B name="Jose" />

      <A name={name}>
        <p>Hello</p>
      </A>
      <C name="Martin" age={parseInt("50")} />

      <Contador />
    </div>
  );
}
