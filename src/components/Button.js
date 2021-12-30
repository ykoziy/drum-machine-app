import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            padClass: ""
        };
    }

    handleClick = (event) => {
        let audio = event.currentTarget.querySelector('audio');
        this.playAudio(audio);
        this.props.onClick(event.target.id);
    }

    playAudio(audio) {
        audio.volume = this.props.volume;
        audio.currentTime = 0;
        audio.play();
    }

    switchButtonState() {
        (this.state.padClass === "") ? this.setState({padClass: "active"}) : this.setState({padClass: ""}) ;
    }

    pressDrumPad() {
        if (this.props.power) {
            this.switchButtonState();
            setTimeout(() => this.switchButtonState(), 100);
        }
    }

    handleKeyPress = (event) => {
      const {text, power, soundName} = this.props;
      if(text.toLowerCase() === event.key.toLowerCase() && power) {
        let audio = document.getElementById(text);
        this.playAudio(audio);
        this.pressDrumPad();
        this.props.onClick(soundName);
      }
    }

    componentDidMount() {
       document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }

    render() {
        const {text, soundName, url, power} = this.props;
        let drumPadClass = `drum-pad ${this.state.padClass}`;
        let isDisabled = (power) ? false : true;
        return(
            <button
                disabled={isDisabled}
                className={drumPadClass}
                id={soundName}
                onClick={(e) => this.handleClick(e)}
            >
                <audio className="clip" id={text} src={url}></audio>
                {text}
            </button>
        );
    }
}

export default Button;