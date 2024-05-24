import React from 'react';
import {NavLink} from 'react-router-dom'
import Friends from './Friends/Friends';

const NavBar = (props) => {
    return (
        <div className='navbar'>

            <NavLink className="navbar__links" to='/profile'>Profile</NavLink>
            <NavLink className="navbar__links" to='/messages'>Messages</NavLink>
            <NavLink className="navbar__links" to='/users'>Users</NavLink>

            <Friends friends={props.friends}/>

        </div>
    );
}

export default NavBar;
