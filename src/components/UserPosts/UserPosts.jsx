import React from 'react';
import { useParams } from 'react-router-dom';
import useFatchData from '../../hooks/useFatchData';
import Posts from '../Posts/Posts';

const UserPosts = () => {
    const {userId} = useParams();
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    const [posts] = useFatchData(url);
    return (
        <div>
            {
                posts ? posts.map((post) => <Posts post={post}/>) : null
            }
        </div>
    );
};

export default UserPosts;