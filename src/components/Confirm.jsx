import React from "react";
import Button from "./Button";

import './Confirm.css'

const Confirm = ({children, task, handleTaskDeletion, handleTaskDeletionConfirm}) => {
    return(
        <>
            <div className="confirm-alert-container">
                {children}
                <div className="buttons-confirm">
                    <Button onClick={() => handleTaskDeletionConfirm(task.id)} colorChange='#bc57ff' backgroundColorChange='#222'>Não</Button>
                    <Button onClick={() => handleTaskDeletion(task.id, true)}>Sim</Button>
                </div>
            </div>
        </>
    );
}

export default Confirm;