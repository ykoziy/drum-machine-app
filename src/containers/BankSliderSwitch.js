import React, { Component } from "react";
import { connect } from 'react-redux';
import { KIT_TITLES } from '../constants/drumData.js';
import { switchBank } from '../actions';

class BankSliderSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            floating: 'left'
        };
    }
    changeBank = () => {
        const {bankName, switchBank} = this.props;
        if(bankName === KIT_TITLES[0]) {
            switchBank(KIT_TITLES[1]);
        } else {
            switchBank(KIT_TITLES[0]);
        }
    }

    handleClick = () => {
        const {power} = this.props;
        if(power) {
            if(this.state.floating === 'left') {
                this.setState({floating: 'right'});
            } else {
                this.setState({floating: 'left'});
            }
        }
        this.changeBank();
    }
    render() {
        return(
            <div className="switch-container">
                <p>Bank </p>
                <div className="switch" onClick={this.handleClick}>
                    <div className="sw-inner" style={{float: this.state.floating}}></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    power: state.power,
    bankName: state.bankName
});

const mapDispatchToProps = (dispatch) => ({
  switchBank: (bankName) => dispatch(switchBank(bankName))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BankSliderSwitch);

