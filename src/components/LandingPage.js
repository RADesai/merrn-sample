import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import { PENDING, FULFILLED } from '../constants';
import '../assets/scss/LandingPage.scss';

export default function LandingPage(props) {
    const { status, fetchModelsActionDispatcher } = props;

    const getLandingMessage = () => 
        <div>
            <div className="landing-card">
                <div>Welcome to your React-Redux App</div>
                <br/>
                <div>Powered by: Node.js + Express.js && MongoDB + Mongoose</div>
                <br/>
            </div>
            <hr className="landing-hr"/>
        </div>;

    const getButtonStyle = () => {
        return status === PENDING
            ? { border: '1px solid #fff' }
            : status === FULFILLED ? { border: '1px solid #7AB58D' } : { border: '1px solid #A70B0B' }
    }

    const getApiCallButton = () => 
        <button
            type="button"
            className="btn btn-outline-primary"
            onClick={ fetchModelsActionDispatcher }
            style={ getButtonStyle() }>API Call
        </button>

    return (
        <div className="row justify-content-center">
            <div className="col-10 col-lg-6 landing text-center">
                <div className="landing-title">MERRN Sample</div>
                <div className="landing-message">
                    { getLandingMessage() }
                </div>
                <div className="landing-button">
                    { getApiCallButton() }
                </div>
                <Loader status={ status }/>
            </div>
        </div>
    )
}

LandingPage.propTypes = {
    status: PropTypes.string,
    fetchModelsActionDispatcher: PropTypes.func
}