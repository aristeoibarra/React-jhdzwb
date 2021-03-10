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

    promesa
      .then(response => response.json())
      .then(data => {
        this.setState({
          articles: data
        });
      });
  }
  /*
    promesa.then(response => {
      response.json().then(data => {
        console.log(data);
        this.setState({
          articles: data
      });
    });*/

  render() {
    return (
      <div>
        {this.state.articles.map(articles => {
          return (
            <div className="card" style={{ backgroundColor: 'red',color:'black' }}>
              <p>{articles.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default function App() {
  return <Blog />;
}
