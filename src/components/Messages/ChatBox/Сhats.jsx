import React from 'react';
import ChatName from './ChatName'
const Chats = () => {
    return (
        <div className="chats">
            <ChatName id = {1} name = 'Ilon Mask'/>     
            <ChatName id = {2} name = 'Donald Tramp'/>     
            <ChatName id = {3} name = 'Bill Geyts'/>     
        </div>
    );
}

export default Chats;
