import React, { Component } from "react";
import { render } from "react-dom";
import Button from "react-uikit-button";
import "./style.css";

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [
        "Mi primer Componente con React",
        "Introducción a React",
        "Que es react"
      ]
    };
  }
  /// Una vez se invoca este método ya están disponibles
  /// los elementos asociados al componente en el DOM.
  componentDidMount() {
    //Consulta via ajax
    let promesa = fetch("https://jsonplaceholder.typicode.com/posts");

    promesa.then(response => {
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        {this.state.articles.map(title => {
          return <p>{title}</p>;
        })}
      </div>
    );
  }
}

export default function App() {
  return <Blog />;
}
