import React from 'react';
import lemImage from '../lem.jpg';

const Header = () => {
    return (
        <header>
            <img src={lemImage} alt="Lemon" />      
            <h1>Lemon website</h1>
            <meta name="description" content="Lemon website"/>
        </header>
    );
}

export default Header;
