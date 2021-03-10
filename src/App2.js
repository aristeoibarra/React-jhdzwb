import React, { Component } from "react";
import { render } from "react-dom";
import Button from "react-uikit-button";
import "./style.css";

//Componente Formulario
class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  syncEmailChanges(email) {
    this.setState({
      email: email
    });
  }

  syncPasswordChanges(password) {
    this.setState({
      password: password
    });
  }

  syncChanges(value, property) {
    let state = {};
    state[property] = value;
    this.setState(state);
  }

  submitForm() {
    console.log(this.state);
  }

  render() {
    return (
      <form>
        <input
          onChange={ev => {
            this.syncChanges(ev.target.value, "email");
          }}
          type="email"
          value={this.state.email}
          placeholder="Email"
        />
        <input
          onChange={ev => {
            this.syncChanges(ev.target.value, "password");
          }}
          type="password"
          value={this.state.password}
          placeholder="*******"
        />
        <div>
          <input
            onClick={() => {
              this.submitForm();
            }}
            type="submit"
            value="Iniciar Sesión"
          />
        </div>
      </form>
    );
  }
}

export default function App() {
  return (
    <div>
      <Formulario />
    </div>
  );
}
