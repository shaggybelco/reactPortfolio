import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PrimeReact from 'primereact/api';
import React, { Component } from "react";
PrimeReact.ripple = true;

export class App extends Component {
  render() {
    return (
      <div data-theme="winter">
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
