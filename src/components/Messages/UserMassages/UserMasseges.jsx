import React from 'react';
import Massage from './Massage';

let diologsNames=[
    {text:'Привет, как дела?', id:1},
    {text:'Го завтра на марс?', id:2},
    {text:'Жду мой чип', id:3}
]
const UserMasseges = () => {
    return (
        <div className="usersMassages">
            {
                diologsNames.map(item=><Massage id={item.id} msg = {item.text}/>)
            }
        </div>
    );
}

export default UserMasseges;
