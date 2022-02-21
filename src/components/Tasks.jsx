import React from "react";
import Task from './Task'

const Tasks = ({tasks, handleTaskClick, handleTaskDeletion, handleTaskDeletionConfirm, handleTaskInfo}) => {

    return(
        <>
            {tasks.map(task => (
                <Task 
                    task={task} 
                    handleTaskClick={handleTaskClick}
                    handleTaskDeletionConfirm={handleTaskDeletionConfirm}
                    handleTaskDeletion={handleTaskDeletion}
                    handleTaskInfo={handleTaskInfo}
                />
            ))}
        </>
    );
};

export default Tasks;