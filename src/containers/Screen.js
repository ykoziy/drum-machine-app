import React from "react";
import { connect } from "react-redux"
import { decimalToPercent } from "../utils"

const Screen = ({power, volumeVal, padName, bankName}) => {
    const onColor = {background: '#509bd3'};
    const offColor = {background: '#232323'};
    const volumeText = `Volume: ${decimalToPercent(volumeVal)}%`;
    return(
        <div className="screen" style={power ? onColor : offColor}>
            <div className="screen-info"><p className="display">{power ? padName : ''}</p></div>
            <div className="mode-info"><p>{power ? bankName : ''}</p></div>
            <div className="volume-info"><p>{power ? volumeText : ''}</p></div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    power: state.power,
    volumeVal: state.volumeVal,
    padName: state.padName,
    bankName: state.bankName
});

export default connect(
    mapStateToProps
)(Screen);