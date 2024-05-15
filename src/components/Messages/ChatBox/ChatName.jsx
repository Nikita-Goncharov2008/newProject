import React from 'react';
import { NavLink } from 'react-router-dom';

const ChatName = (props) => {
    return (
        <NavLink id={props.id} to={`/messages/${props.id}`} >{props.name}</NavLink>
    );
}

export default ChatName;
