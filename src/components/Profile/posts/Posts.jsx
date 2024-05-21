import React from 'react';
import Post from './Post';
   
let postText = React.createRef()

const Posts = (props) => {
    function inovation(){
        if(postText.current.value!==''){
            props.makePost(postText.current.value)
            postText.current.value=''
        }
    }
    return (
        <>
            <form action="#">
                <h2>My posts</h2>
                <input ref = {postText} type="text" placeholder='type text of your posts'/>
                <button onClick={inovation} >Add Post </button>
                
            </form>
            <div className="posts">
                {props.postProp.map(item=><Post userName={item.name} postText={item.text}/>)}
                
                
            </div>
        </>
    );
}

export default Posts;
