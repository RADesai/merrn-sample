import React from 'react';
import '../assets/scss/Footer.scss';

const Footer = () => {
    return (
        <div className="row">
            <div className="footer text-center">
                <a target="_blank" href="https://github.com/RADesai/merrn-sample">
                    <button className="btn btn-lg" type="submit">
                        MERRN Sample on GitHub
                    </button>
                    <button className="btn btn-lg" type="submit">
                        My GitHub
                    </button>
                </a>
            </div>
        </div>
    )
}


export default Footer;