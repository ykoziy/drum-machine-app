import React from "react";
import { connect } from 'react-redux'
import { adjustVolume } from '../actions'
import { decimalToPercent } from "../utils"

const VolumeBar = ({power, volumeVal, adjustVolume}) => {
    return(
        <div className="volume">
            <i className="fas fa-volume-down"/>
            <input type="range" min="0" max="100" className="slider" id="volume-range"
                value={decimalToPercent(volumeVal)}
                onChange={power ? adjustVolume : undefined}
            />
            <i className="fas fa-volume-up"/>
        </div>
        );
}

const mapStateToProps = (state) => ({
    power: state.power,
    volumeVal: state.volumeVal
});

const mapDispatchToProps = (dispatch) => ({
  adjustVolume: (event) => dispatch(adjustVolume(event.target.value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VolumeBar);