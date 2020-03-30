import React from 'react';
import './Header.scss';
import TwitterLogo from '../../assets/img/original.png';

const Header = () => {
    return (
        <div className="header">
            <img src={TwitterLogo} alt="Tweets Simulator" />
            <h1>Tweets Simulator</h1>
        </div>
    );
};

export default Header;