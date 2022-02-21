import React, { useState } from 'react';
import "./AddTask.css"
import Button from './Button';

const AddTask = ({handleTaskAddition, placeholder}) => {

    const [inputTitleData, setInputTitleData] = useState('');
    const [inputDescriptionData, setInputDescriptionData] = useState('');

    const handleInputTitleChange = (e) => {
        setInputTitleData(e.target.value);
    }

    const handleInputDescriptionChange = (e) => {
        setInputDescriptionData(e.target.value)
    }

    const handleAddTaskClick = () => {
        inputTitleData ? handleTaskAddition(inputTitleData, inputDescriptionData) : alert('Dê um nome a tarefa')
        setInputTitleData('');
        setInputDescriptionData('');
    }

    return ( 
        <div className="add-task-container">
            <input 
                onChange={handleInputTitleChange}
                value={inputTitleData}
                placeholder={placeholder}
                className="add-task-input" 
                type="text"
                onSubmit
                id="add-title"
            />

            <input 
                onChange={handleInputDescriptionChange}
                value={inputDescriptionData}
                placeholder="Descrição"
                className="add-task-input" 
                type="text"
                onSubmit
                id="add-description"
            />
            
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
            
        </div>
    );
}
    
export default AddTask;
