import React from 'react';
import Modal from '../ui/Modal';

const AddTaskModal = ({isOpen, setIsOpen}) => {
    return (
        <div>
             <Modal 
            isOpen={isOpen} 
            setIsOpen={setIsOpen}
            title='Programming hero'
            >
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum modi obcaecati ex eaque, ducimus autem ipsum accusantium aperiam consequuntur dignissimos! Necessitatibus, quidem quaerat.</p>
            </Modal>
        </div>
    );
};

export default AddTaskModal;