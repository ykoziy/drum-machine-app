import React, { Component } from "react";
import "../assets/stylesheets/App.css";

import Header from "../containers/Header.js";
import DrumMachine from "./DrumMachine.js";
import ControlPanel from "./ControlPanel.js";
import Screen from "../containers/Screen.js";
import VolumeBar from "../containers/VolumeBar.js";

class App extends Component {
  render() {
    return (
      <div className="drum-container">
        <Header/>
        <DrumMachine
            left={
                <div className="button-panel">
                Buttons go here.
                </div>
            }
            right={
                <ControlPanel>
                    <Screen/>
                    <div>Bank switch goes here.</div>
                    <VolumeBar/>
                </ControlPanel>
            }
        />
      </div>
    );
  }
}

export default App;
