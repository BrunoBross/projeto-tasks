import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Tasks from "./components/Tasks";
import './App.css'
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

const App = () => {

  const [tasks, setTasks] = useState([]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {...task, completed: !task.completed}
      
      return task;
    })

    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
      deleting: false,
    }]

    if(newTasks){
      setTasks(newTasks);
    }
  };

  const handleTaskDeletionConfirm = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {...task, deleting: !task.deleting}
      return task;
    })

    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks)
  }

  return(
    <Router>
      <div className="container">
        <Header/>
        <Route 
          path="/" 
          exact 
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} placeholder="Nome da tarefa"/>
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
              </p>}
            </>
          )}
        />

        <Route
          path="/:taskTitle"
          exact
          component={TaskDetails}
        />
      </div>
      
      <h4 style={{color:'#FFF', textAlign:'center', marginBottom:'2rem'}}>Projeto React do Curso @Felipe Rocha</h4>
    </Router>
  )
}

export default App;
