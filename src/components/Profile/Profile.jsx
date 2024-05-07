import React from 'react';
import userImage from '../../img/userImage.png'
import Posts from './posts/Posts';

const Profile = () => {
    return (
        <div className='profile'>
            <div className="userInfo">
                <img src={userImage} alt="image profile" />
                <h3>User Name</h3>
            </div>
            
            <Posts/>
        </div>
    );
}

export default Profile;
