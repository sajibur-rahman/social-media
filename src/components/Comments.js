import React, { useContext } from 'react';
import { PostsContext } from '../App';
import Comment from './Comment';

const Comments = () => {
    const {comments} = useContext(PostsContext);
    return (
        <div>
            {
                comments ? comments.map((comment) => <Comment comment = {comment}/>) : null
            }
        </div>
    );
};

export default Comments;