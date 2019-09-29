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
        audio.volume = this.props.volume;
        audio.currentTime = 0;
        audio.play();
        this.props.onClick(event.target.id);
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