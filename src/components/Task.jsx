import React from 'react';
import {IoIosRemoveCircleOutline, IoIosInformationCircleOutline} from 'react-icons/io'
import { Link } from 'react-router-dom';
import Confirm from './Confirm';

import "./Task.css"

const Task = ({task, handleTaskClick, handleTaskDeletion, handleTaskDeletionConfirm, handleTaskInfo}) => {

    return ( 
        <>
            <div className="container-all" style={task.completed ? {borderLeft: '6px solid #8a2be2'} : {}}>
                <div className="task-container">
                    <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                        <p>{task.title}</p>
                    </div>

                    <div className="buttons-container">
                        <button className="see-task-button" onClick={() => handleTaskInfo(task.id)}>
                            <Link id="link" to="/details" state={{task: task}}><IoIosInformationCircleOutline id="task-button"/></Link>
                        </button>

                        <button className="remove-task-button" onClick={() => handleTaskDeletionConfirm(task.id)}>
                            <IoIosRemoveCircleOutline id="task-button"/>
                        </button>
                    </div>
                </div> 

                <div className="confirm-container" style={task.deleting ? {} : {display:'none'}}>
                    <Confirm Confirm handleTaskDeletion={handleTaskDeletion} handleTaskDeletionConfirm={handleTaskDeletionConfirm} task={task}>Você tem certeza que deseja deletar essa tarefa?</Confirm>
                </div>
            </div>
        </>
        
     );
}
 
export default Task;