import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from "./components/Main";
import TaskDetails from './components/TaskDetails'

import './App.css'

const App = () => {

  return(
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Main/>}/>
          <Route path="/details" element={<TaskDetails/>}/>
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </div>
      <h4 style={{color:'#FFF', textAlign:'center', marginBottom:'2rem'}}>Projeto React do Curso @Felipe Rocha</h4>
    </BrowserRouter>
  )
}

export default App;
