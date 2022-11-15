import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PrimeReact from 'primereact/api';
import React, { Component } from "react";

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";    //icons

export class App extends Component {
  
  render() {
    PrimeReact.ripple = true;
    PrimeReact.inputStyle = 'filled';
    return (
      <div data-theme="winter">
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
