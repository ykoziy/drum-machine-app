import React from "react";

const Header = (props) => {
    return(
        <div id="head">
            <div id="head-text">
                <h1>Drum Machine</h1>
            </div>
            <div id="pwr-btn-container">
                <button id="pwr-btn"
                    className={props.powerState ? "on" : null}
                    onClick={props.switchPower}
                >
                    <i className="far fa-dot-circle"/>
                </button>
            </div>
        </div>
    );
}

export default Header