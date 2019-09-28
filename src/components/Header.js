import React from "react";
import { connect } from 'react-redux'
import { switchPower } from '../actions'

const Header = ({power, switchPower}) => {
    return(
        <div id="head">
            <div id="head-text">
                <h1>Drum Machine</h1>
            </div>
            <div id="pwr-btn-container">
                <button id="pwr-btn"
                    className={power ? "on" : null}
                    onClick={switchPower}
                >
                    <i className="far fa-dot-circle"/>
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    power: state.power
});

const mapDispatchToProps = (dispatch) => ({
  switchPower: () => dispatch(switchPower())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);