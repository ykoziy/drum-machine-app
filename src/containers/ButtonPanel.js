import React from "react";
import { connect } from 'react-redux';
import { KIT_TITLES, DRUM_KIT_ONE, DRUM_KIT_TWO} from '../constants/drumData.js'

const ButtonPanel = ({power, volumeVal}) => {
    return(
        <div className="button-panel">
            Buttons go here.
        </div>
    );
}

const mapStateToProps = (state) => ({
    power: state.power,
    volumeVal: state.volumeVal
});

const mapDispatchToProps = (dispatch) => ({
  //adjustVolume: (event) => dispatch(adjustVolume(event.target.value))
  //onDrumPadClick: (event) => dispatch(onDrumPadClick(event))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonPanel);