import React from 'react';

const PostCard = ({post}) => {
    return (
        <div className='bg-zinc-700 text-zinc-200 rounded p-5'>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default PostCard;