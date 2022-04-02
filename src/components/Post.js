
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const navigate =  useNavigate()
    console.log(post);
    const {title,body,id} = post;
    return (
        <div className='border-2 border-purple-700 rounded-lg p-4 w-2/4 m-7 space-y-3'>
            <h3 className='text-xl font-semibold text-blue-600'>{title}</h3>
            <p className='text-sm'>{body}</p>
            <button className='border-2 border-purple-500 py-2 px-10 rounded-lg uppercase' onClick={() => navigate(`/audenceComments/${id}`)}>see comments</button>
        </div>
    );
};

export default Post;