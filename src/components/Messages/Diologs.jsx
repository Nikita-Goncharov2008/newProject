import React from 'react';
import Massage from './UserMassages/Massage';
import Chats from './ChatBox/Сhats'
import UserMasseges from './UserMassages/UserMasseges';
const Messages = () => {
    return (
        <div className='dialog'>
            <div className="blockChats">
                <Chats/>
            </div>
            <div className='blockMassage'> 
                <UserMasseges/>
                <form className="form" action="#">
                    <input type="text" placeholder='Введите сообщение'/>
                    <button className='sendButton'>отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Messages;
