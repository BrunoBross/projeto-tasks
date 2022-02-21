import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Button from './Button';
import './TaskDetails.css'

const TaskDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {task} = location.state

    return ( 
        <>
            <div className="task-details-container">
                <h2>{task.title}</h2>
                <p>{task.description ? task.description : <p>Sem descrição</p>}</p>
            </div>
            <div className="back-button-container">
                <Button onClick={() => navigate(-1)}>Voltar</Button>
            </div>
        </>
    );
}
 
export default TaskDetails;