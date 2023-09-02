import React from 'react';
import Modal from '../ui/Modal';
import { useSelector } from 'react-redux';

const TaskDetailsModal = ({isOpen, setIsOpen, id}) => {
    const {tasks} = useSelector((state)=>state.taskSlice);

    const task = tasks.find((item)=>item.id===id);
    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
                {task?.description}
            </Modal>
        </div>
    );
};

export default TaskDetailsModal;