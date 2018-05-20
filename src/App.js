import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './css/App.css';
import TableTop from './components/TableTop';
import Robot from './components/Robot';
import Report from './components/Report';
import PlaceRobot from './components/PlaceRobot';
import Directions from './components/Directions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        X: 0,
        Y: 0,
        F: 0
    }

    this.handlePlaceRobot = this.handlePlaceRobot.bind(this);
  }

  handlePlaceRobot(x, y, f) {
    if (x<0 || x>4 || y<0 || y>4) {
      this.setState({
          X: this.state.X, Y: this.state.Y, F: this.state.F
      })  
    }else{
      this.setState({
          X: x, Y: y, F: f
      })
    }
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to Robot Simulation</h1>
        </header>
        <div className="app-content">
          <div className="table-top">
            <TableTop/>
            <Robot xPosition={this.state.X} yPosition={this.state.Y} facePosition={this.state.F}/>
          </div>
          <div className="commands-container">
            <PlaceRobot placeRobotPos={this.handlePlaceRobot}/>
            <Directions/>
            <Report/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
