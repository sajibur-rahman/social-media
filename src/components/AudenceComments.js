import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostsContext } from '../App';
import Comment from './Comment';

const AudenceComments = () => {
    const [postComments,setPostComments] =  useState([])
    const {postId} = useParams();
    const {comments} = useContext(PostsContext);
    const filterdPostId = +postId;
    console.log(comments);
    console.log(filterdPostId);
    useEffect(()=>{
        const selectedComments = comments.filter((comment) => comment.postId === filterdPostId);
        setPostComments(selectedComments)
    },[comments,filterdPostId])
    return (
        <div>
            {
                postComments ? postComments.map((comment) => <Comment comment={comment}/>) : null
            }
        </div>
    );
};

export default AudenceComments;