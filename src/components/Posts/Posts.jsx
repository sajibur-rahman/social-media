import React from 'react';

const Posts = ({post}) => {
    console.log(post);
    const {title,body} = post;
    return (
        <div className='border-2 border-purple-600 rounded-md m-5 p-5 w-2/4 '>
            <h2 className='text-3xl text-blue-500 mb-4'>{title}</h2>
            <p className='text-sm '>{body}</p>
        </div>
    );
};

export default Posts;