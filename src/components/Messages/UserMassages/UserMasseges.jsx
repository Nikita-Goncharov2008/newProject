import React from 'react';
import Massage from './Massage';


const UserMasseges = (props) => {
    return (
        <div className="usersMassages">
            {
                props.diologsNames.map(item=><Massage id={item.id} msg = {item.text}/>)
            }
        </div>
    );
}

export default UserMasseges;
