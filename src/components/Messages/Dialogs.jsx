import React from 'react';
import Chats from './ChatBox/Сhats'
import UserMasseges from './UserMassages/UserMasseges';

const Messages = (props) => {
    return (
        <div className='dialog'>
            <div className="blockChats">
                <Chats chatNames = {props.DioalogsPage.chatNames}/>
            </div>
            
            <div className='blockMassage'> 
                <UserMasseges diologsNames={props.DioalogsPage.diologsNames}/>
                <form className="form" action="#">
                    <input type="text" placeholder='Введите сообщение'/>
                    <button className='sendButton'>отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Messages;
