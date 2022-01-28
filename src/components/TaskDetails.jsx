import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Button from './Button';
import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    console.log(params)

    return ( 
        <>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae neque quasi doloremque
                consectetur obcaecati soluta pariatur vel,magnam enim nobis beatae temporibus. Porro autem 
                quisquam ratione beatae harum laborum sint.</p>
            </div>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
        </>
    );
}
 
export default TaskDetails;