import React from 'react';
import Post from './Post';

const Posts = () => {
    return (
        <>
            <form action="#">
                <h2>My posts</h2>
                <input type="text" placeholder='type text of your posts'/>
                <button>Add Post </button>
            </form>
            <div className="posts">
                <Post userName="tolya" postText="hi"/>
                <Post userName="glasha" postText="h"/>
                <Post userName="sveta" postText="a"/>
                <Post userName="stepa" postText="a"/>
                <Post userName="d" postText="z"/>
                <Post userName="a" postText="x"/>
                <Post userName="f" postText="c"/>
                <Post userName="g" postText="b"/>
                <Post userName="b" postText="v"/>
                <Post userName="x" postText="b"/>
                <Post userName="z" postText="n"/>
                <Post userName="v" postText="m"/>
                <Post userName="n" postText=","/>
            </div>
        </>
    );
}

export default Posts;
