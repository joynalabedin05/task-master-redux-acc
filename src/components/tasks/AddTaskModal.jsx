import React from 'react';
import Modal from '../ui/Modal';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/features/tasks/taskSlice';

const AddTaskModal = ({isOpen, setIsOpen}) => {
const dispatch = useDispatch();

    const {register, handleSubmit}  = useForm();
    const onSubmit = (data)=>{
        // console.log(data);
        dispatch(addTask(data));
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
               <input className='w-full' type="text" name="" id="title" {...register('title')} />    
               </div>
               <div>
                <label className='flex flex-col gap-3' htmlFor="assignTo">AssignTo</label>
               <input className='w-full' type="text" name="" id="assignTo" {...register('assignTo')} />    
               </div>
               <div>
                <label className='flex flex-col gap-3' htmlFor="description">Description</label>
               <input className='w-full' type="text" name="description" id="description" {...register('description')} />    
               </div>
               <div>
                <label className='flex flex-col gap-3' htmlFor="deadLine">Deadline</label>
               <input className='w-full' type="date" name="deadLine" id="deadLine" {...register('deadLine')} />    
               </div>
               <div>
                <label className='flex flex-col gap-3' htmlFor="priority">Priority</label>
               <input className='w-full' type="text" name="priority" id="priority" {...register('priority')} />    
               </div>
               
                <button type='submit'>submit</button>
             </form>
            </Modal>
        </div>
    );
};

export default AddTaskModal;