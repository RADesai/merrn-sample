import React from 'react';
import '../assets/scss/LandingPageHeader.scss';

const LandingPageHeader = () => {
    const getLandingMessage = () =>
        <div>
            <div className="landing-title">MERRN Sample</div>
            <div className="landing-message">
                <div className="landing-card">
                    <div>Welcome to your React-Redux App</div>
                    <div>Powered by: Node.js + Express.js && MongoDB + Mongoose</div>
                </div>
            </div>
            <hr className="landing-hr"/>
        </div>;

    return (
        <div className="row justify-content-center">
            <div className="col-10 col-lg-8 landing text-center">    
                { getLandingMessage() }
            </div>
        </div>
    )
}

export default LandingPageHeader;