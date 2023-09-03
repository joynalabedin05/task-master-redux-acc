import React from 'react';
// import { useGetPostsQuery } from '../redux/features/api/baseApi';
import PostCard from '../components/layouts/PostCard';
import { useGetPostsByIdQuery, useGetPostsQuery, useSetPostMutation } from '../redux/features/api/baseApi';
import { useForm } from 'react-hook-form';

const Feed = () => {
    // const {data:posts, isError, isLoading, error} = useGetPostsQuery(); return objects
    // console.log(data);
    const {data: post, isError, isLoading } = useGetPostsByIdQuery(1);

    const [setPost, {data: postData}] = useSetPostMutation();

    console.log(postData);

    const {register, handleSubmit} = useForm();

    const onSubmit = (data)=>{
        // console.log(data); {post: 'hellow Bangladesh'}
        setPost({title: 'this is a title', body: data.post, userId: 7965});
    }
    if(isLoading){
        return <p className='text-4xl text-zinc-200'>loading.... </p>
    }
    if(!isLoading && isError){
        return <p className='text-4xl text-zinc-200'>Something got Error!!</p>
    }

    return (
        <div className='m-10'>
           <div className='text-zinc-200'>
           <form onSubmit={handleSubmit(onSubmit)}>
               <div>
                <label className='flex flex-col gap-3' htmlFor="post">Post</label>
               <input className='w-1/2 text-zinc-700 rounded' type="text" name="" id="post" {...register('post')} />    
               </div>
                <button className='p-2 rounded bg-zinc-700 my-4' type='submit'>submit</button>
             </form>
           </div>
            <div className='flex flex-col gap-3 '>
               {/* {
                posts?.map(post=><PostCard post={post} key={post.id}></PostCard>)
               }  */}
              
                <PostCard post={post} key={post.id}></PostCard>
              
            </div>
        </div>
    );
};

export default Feed;