import React from 'react';
import Chats from './ChatBox/Сhats'
import UserMasseges from './UserMassages/UserMasseges';
import { actionCreatorSendMassege, actionCreatorRerenderMassege } from '../../data/massagesReducer';


let postMassege = React.createRef()


const Messages = (props) => {

    let rerenderMasseges = ()=>{
        props.dispatch(actionCreatorRerenderMassege(postMassege.current.value))
    }

    let newPost =()=>{
        props.dispatch(actionCreatorSendMassege)
        postMassege.current.value=''
    }
    return (
        <div className='dialog'>
            <div className="blockChats">
                <Chats chatNames = {props.DioalogsPage.chatNames}/>
            </div>
            
            <div className='blockMassage'> 
                <UserMasseges diologsNames={props.DioalogsPage.diologsNames}/>
                <form className="form" action="#">
                    <input onChange={rerenderMasseges} value={props.newMassage} ref={postMassege} type="text" placeholder='Введите сообщение'/>
                    <button onClick={newPost} className='sendButton'>отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Messages;
