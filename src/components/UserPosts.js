import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostsContext } from '../App';
import Post from './Post';

const UserPosts = () => {
    const [userPosts,setUserPosts] = useState([])
    const {userId} = useParams();

    const filterdUserId = +userId

    const { posts } =  useContext(PostsContext);


    useEffect(() => {
        const selectedUserPosts = posts.filter((post) => post.userId === filterdUserId);
        setUserPosts(selectedUserPosts);
    },[posts,filterdUserId]);
    return (
        <div>
            {
                userPosts ? userPosts.map((post) => <Post key={post.id} post={post}/>) : null
            }
        </div>
    );
};

export default UserPosts;