import React from 'react';
import logo from '../Assets/github.png';

const Footer = () => {
    return (
        <a href="https://github.com/Jando-G"><div className="Footer">
            <div>Alejandro Gutierrez </div>
            <img src={logo} alt="gitLogo" />
        </div>
        </a>
    )
}

export default Footer;