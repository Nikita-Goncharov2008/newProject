import React from 'react';
import Post from './Post';
import { actionCreator, actionCreatorRerender} from '../../../data/profileReducer';

let postText = React.createRef()

const Posts = (props) => {

    let rerenderUi = ()=>{
        props.dispatch(actionCreatorRerender(postText.current.value))
    }

    function inovation(e){
        e.preventDefault()
        if(postText.current.value!==''){
            props.dispatch(actionCreator())
                postText.current.value=''
        }
    }
    return (
        <>
            <form action='#'>
                <h2>My posts</h2>
                <input onChange={rerenderUi} value={props.newPostText} ref = {postText} type="text" placeholder='type text of your posts'/>
                <button onClick={inovation}>Add Post </button>
            </form>
            <div className="posts">
                {props.postProp.map(item=><Post userName={item.name} postText={item.text}/>)}
                
                
            </div>
        </>
    );
}

export default Posts;
