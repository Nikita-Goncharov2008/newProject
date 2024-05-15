import React from 'react';
import ChatName from './ChatName'

let chatNames=[
    {name:'Ilon Mask', id:1},
    {name:'Donald Tramp', id:2},
    {name:'Bill Geyts', id:3},
]

const Chats = () => {
    return (
        <div className="chats">
            {
                chatNames.map(item=><ChatName id = {item.id} name = {item.name}/>  )   
            }
        </div>
    );
}

export default Chats;
