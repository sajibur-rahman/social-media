import React, { useContext } from 'react';
import { PostsContext } from '../App';
import Post from './Post';

const Posts = () => {
    const {posts} =  useContext(PostsContext);
    return (
        <div>
            {
                posts ? posts.map((post) => <Post post={post}/>) : null
            }
        </div>
    );
};

export default Posts;