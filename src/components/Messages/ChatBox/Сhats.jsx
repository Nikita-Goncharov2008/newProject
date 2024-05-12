import React from 'react';
import ChatName from './ChatName'
const Chats = () => {
    return (
        <div className="chats">
            <ChatName name = 'Ilon Mask'/>     
            <ChatName name = 'Donald Tramp'/>     
            <ChatName name = 'Bill Geyts'/>     
        </div>
    );
}

export default Chats;
