import React, { Component } from 'react';
import './AlertMessage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { bindActionCreators } from 'redux';
import { Creators } from '../../store/actions/AlertActions';
import { connect } from 'react-redux';

class AlertMessage extends Component {

    removeMessage = () => {
        this.props.removeMessage();
    }

    render(){
        return(
            <div className={`alert-container ${this.props.messageType}`}>
                <span className="alert-container__message">
                    { this.props.messageText }
                </span>
                <span className="alert-container__close">
                    <button onClick={ () => this.removeMessage() } className="alert-container__close--btn">
                        <FontAwesomeIcon icon={ faTimes } />
                    </button>
                </span>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    messageText: state.alertReducer.messageText,
    messageType: state.alertReducer.messageType, 
});

const mapDispatchToProps = (dispatch) => bindActionCreators(Creators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AlertMessage);