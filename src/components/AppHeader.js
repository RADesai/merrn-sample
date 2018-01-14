import React from 'react';
import '../assets/scss/AppHeader.scss';

const AppHeader = () => {
    const getHeaderContent = () =>
        <div className="row">
            <div className="header-title col-12">MERRN Sample</div>
        </div>;

    return (
        <div className="justify-content-center">
            <div className="header">    
                { getHeaderContent() }
            </div>
        </div>
    )
}

export default AppHeader;