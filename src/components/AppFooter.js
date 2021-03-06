import React from 'react';
import '../assets/scss/AppFooter.scss';

const AppFooter = () => {
    return (
        <div>
            <div className="footer text-center">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/RADesai/merrn-sample">
                    <button className="btn btn-lg" >
                        MERRN Sample on GitHub
                    </button>
                </a>
            </div>
        </div>
    )
}


export default AppFooter;