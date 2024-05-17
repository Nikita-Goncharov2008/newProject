import React from 'react';
import Post from './Post';
   

const Posts = (props) => {
    return (
        <>
            <form action="#">
                <h2>My posts</h2>
                <input type="text" placeholder='type text of your posts'/>
                <button>Add Post </button>
            </form>
            <div className="posts">
                {props.postProp.map(item=><Post userName={item.name} postText={item.text}/>)}
                
                
            </div>
        </>
    );
}

export default Posts;
