import React, { useState } from 'react';
import "./AddTask.css"
import Button from './Button';

const AddTask = ({handleTaskAddition, placeholder}) => {

    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        inputData ? handleTaskAddition(inputData) : alert('Dê um nome a tarefa')
        setInputData('');
    }

    return ( 
        <div className="add-task-container">
            <input 
                onChange={handleInputChange}
                value={inputData}
                placeholder={placeholder}
                className="add-task-input" 
                type="text"
                onSubmit
            />
            
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
}
    
export default AddTask;
