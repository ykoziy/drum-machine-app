import React, { Component } from "react";

import Header from "../containers/Header.js";
import DrumMachine from "./DrumMachine.js";
import ButtonPanel from "../containers/ButtonPanel.js";
import ControlPanel from "./ControlPanel.js";
import Screen from "../containers/Screen.js";
import BankSliderSwitch from "../containers/BankSliderSwitch.js";
import VolumeBar from "../containers/VolumeBar.js";

class App extends Component {
  render() {
    return (
      <div className="drum-container">
        <Header/>
        <DrumMachine
            left={
                <ButtonPanel/>
            }
            right={
                <ControlPanel>
                    <Screen/>
                    <BankSliderSwitch/>
                    <VolumeBar/>
                </ControlPanel>
            }
        />
      </div>
    );
  }
}

export default App;
