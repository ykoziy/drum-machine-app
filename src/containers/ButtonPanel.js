import React from "react";
import { connect } from 'react-redux';
import { KIT_TITLES, DRUM_KIT_ONE, DRUM_KIT_TWO} from '../constants/drumData.js';
import Button from '../components/Button.js';

const ButtonPanel = ({power, volumeVal, bankName}) => {
    let drumKit = (bankName === KIT_TITLES[0]) ? DRUM_KIT_ONE: DRUM_KIT_TWO;

    return(
        <div className="button-panel">
            {drumKit.map((i, idx) => (
                <Button
                    key={"btn-"+idx} text={i.key} soundName={i.title}
                    url={i.url} volume={volumeVal} power={power}
                />
            ))}
        </div>
    );
}

const mapStateToProps = (state) => ({
    power: state.power,
    volumeVal: state.volumeVal,
    bankName: state.bankName
});

const mapDispatchToProps = (dispatch) => ({
  //adjustVolume: (event) => dispatch(adjustVolume(event.target.value))
  //onDrumPadClick: (event) => dispatch(onDrumPadClick(event))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonPanel);