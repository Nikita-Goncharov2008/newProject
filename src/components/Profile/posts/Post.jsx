import React from 'react';
import userImage from '../../../img/profileimages/profile1.png'


const Post = (props) => {
    return (
        <>
            <div className="post">
                <div className="userInfo">
                    <img src={userImage} alt="user image" width="60px"/>
                    <p>{props.userName}</p>
                </div>
                    <div className="postInfo">
                        <p>{props.postText}</p>
                    </div>
            </div>
        </>
    );
}

export default Post;
