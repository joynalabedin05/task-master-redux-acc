import React from 'react';
import Modal from '../ui/Modal';
import {useForm} from 'react-hook-form';

const AddTaskModal = ({isOpen, setIsOpen}) => {
    const {register, handleSubmit}  = useForm();
    const onSubmit = (data)=>{
        console.log(data);
    }

    return (
        <div>
             <Modal 
            isOpen={isOpen} 
            setIsOpen={setIsOpen}
            title='Programming hero'
            >
             <form onSubmit={handleSubmit(onSubmit)}>
               <div>
                <label className='flex flex-col gap-3' htmlFor="title">Title</label>
               <input className='w-full' type="text" name="" id="title" {...register('name')} />    
               </div>
               <div>
                <label className='flex flex-col gap-3' htmlFor="email">Email</label>
               <input className='w-full' type="email" name="" id="email" {...register('email')} />    
               </div>
               <div>
                <label className='flex flex-col gap-3' htmlFor="password">Password</label>
               <input className='w-full' type="password" name="" id="password" {...register('password')} />    
               </div>
               
                <button type='submit'>submit</button>
             </form>
            </Modal>
        </div>
    );
};

export default AddTaskModal;