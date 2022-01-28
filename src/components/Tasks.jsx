import React from "react";
import Task from "./Task";

const Tasks = ({tasks, handleTaskClick, handleTaskDeletion, handleTaskDeletionConfirm}) => {
    return(
        <>
            {tasks.map(task => (
                <Task 
                    task={task} 
                    handleTaskClick={handleTaskClick}
                    handleTaskDeletionConfirm={handleTaskDeletionConfirm}
                    handleTaskDeletion={handleTaskDeletion}
                />
            ))}
        </>
    );
};

export default Tasks;