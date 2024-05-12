import React from 'react';
import Massage from './Massage';
const UserMasseges = () => {
    return (
        <div className="usersMassages">
            <Massage msg = 'Привет, как дела?'/>
            <Massage msg = 'Го завтра на марс?'/>
            <Massage msg = 'Жду мой чип'/>
        </div>
    );
}

export default UserMasseges;
