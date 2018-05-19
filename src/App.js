import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to Robot Simulation</h1>
        </header>
      </div>
    );
  }
}

export default App;
