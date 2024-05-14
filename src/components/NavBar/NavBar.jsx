import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar'>

            <NavLink className="navbar__links" to='/profile'>Profile</NavLink>
            <NavLink className="navbar__links" to='/messages'>Messages</NavLink>
            <NavLink className="navbar__links" to='/users'>Users</NavLink>

        </div>
    );
}

export default NavBar;
