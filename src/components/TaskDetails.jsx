import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {IoIosRemoveCircleOutline} from 'react-icons/io'
import {AiOutlineClockCircle} from 'react-icons/ai'

import Button from './Button';
import './TaskDetails.css'
import Header from './Header';

const TaskDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {task} = location.state

    return ( 
        <>
            <Header>{task.title} <p title="Time added">{task.time}<AiOutlineClockCircle/></p></Header>
            <div className="task-details-container">
                <p>{task.description ? task.description : <p>Sem descrição</p>}</p>
            </div>
            <div className="back-button-container">
                <Button onClick={() => navigate(-1)}>Voltar</Button>
            </div>
        </>
    );
}
 
export default TaskDetails;