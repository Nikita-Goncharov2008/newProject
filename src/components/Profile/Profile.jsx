import React from 'react';
import userImage from '../../img/profileimages/profile1.png'
import Posts from './posts/Posts';

const Profile = (props) => {
    return (
        <div className='profile'>
            <div className="userInfo">
                <img src={userImage} alt="image profile" />
                <h3>User Name</h3>
            </div>
            
            <Posts dispatch={props.dispatch} newPostText={props.newPostText} postProp={props.ProfilePage.postProp}/>
        </div>
    );
}

export default Profile;
