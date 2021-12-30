import React from "react";
import { connect } from 'react-redux'
import { switchPower } from '../actions'

const Header = ({power, switchPower}) => {
    return(
        <div className="head">
            <div className="head-text">
                <h1>Drum Machine</h1>
            </div>
            <div className="pwr-btn-container">
                <button className={`pwr-btn ${power ? "on" : null}`}
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

