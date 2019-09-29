import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            padClass: ""
        };
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
            >
                <audio className="clip" id={text} src={url}></audio>
                {text}
            </button>
        );
    }
}

export default Button;