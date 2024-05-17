import React from 'react';
import ChatName from './ChatName'
    

const Chats = (props) => {
    return (
        <div className="chats">
            {
                props.chatNames.map(item=><ChatName id = {item.id} name = {item.name}/>  )   
            }
        </div>
    );
}

export default Chats;
