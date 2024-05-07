import React from 'react';
import logo from "../../img/logo.png"

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo" width="120px" />
        </div>
    );
}

export default Header;
