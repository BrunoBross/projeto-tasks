import React, { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid'

import Tasks from "./Tasks";
import AddTask from "./AddTask";
import Header from "./Header";

const Main = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storageTasks = JSON.parse(sessionStorage.getItem('tasks'))
    if(storageTasks){
      setTasks(JSON.parse(sessionStorage.getItem('tasks')))
    } 
  }, [])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {...task, completed: !task.completed}
      
      return task;
    })

    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle, taskDescription) => {
    
    let date = new Date()
    let hour = date.getHours();
    let minute = date.getMinutes();
    let hours = `${hour}:${minute}`

    const newTasks = [
      ...tasks, 
      {
        id: uuidv4(),
        title: taskTitle,
        description: taskDescription,
        completed: false,
        deleting: false,
        time: hours
    }]

    if(newTasks){
      setTasks(newTasks);
      sessionStorage.setItem('tasks', JSON.stringify(newTasks))
    }
  };

  const handleTaskDeletionConfirm = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {...task, deleting: !task.deleting}
      return task;
    })

    if(newTasks){
      setTasks(newTasks);
      sessionStorage.setItem('tasks', JSON.stringify(newTasks))
    }
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    if(newTasks){
      setTasks(newTasks);
      sessionStorage.setItem('tasks', JSON.stringify(newTasks))
    }
  }

  return(
    <>
        <Header>Minhas Tarefas</Header>

        <AddTask handleTaskAddition={handleTaskAddition} placeholder="Nome da tarefa"/>

        <div className="tasks">
          {tasks.length > 0 ? 
            <Tasks 
            tasks={tasks} 
            handleTaskClick={handleTaskClick}
            handleTaskDeletion={handleTaskDeletion}
            handleTaskDeletionConfirm={handleTaskDeletionConfirm}
            /> : 
            <p 
            style={{color: '#FFF', marginLeft: '2px'}}>
            Não há nenhuma tarefa registrada
            </p>
          }
        </div>
            
        
    </>
      
  )
}

export default Main;
