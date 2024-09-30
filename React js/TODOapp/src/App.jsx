import React, { useState } from 'react';
import './App.css';


function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);

  return (
    <div className="App">

      <h1>TODOlist</h1>

      <div className="todo-wrapper">

        <div className="todo-input">
          <div className="todo-input-item">
            <label htmlFor="">Title</label>
            <input type="text" placeholder="What's the task title" />
          </div>
          <div className="todo-input-item">
            <label htmlFor="">Description</label>
            <input type="text" placeholder="What's the task description" />
          </div>
          <div className="todo-input-item">
            <button type="button" className="primaryBtn">Add</button>
          </div>
        </div>

        <div className="btn-area">
          <button className={`secondaryBtn ${isCompleteScreen === false && 'active'}`}
            onClick={() => setIsCompleteScreen(false)}>Todo</button>
          <button className={`secondaryBtn ${isCompleteScreen === true && 'active'}`}
            onClick={() => setIsCompleteScreen(true)}>Completed</button>
        </div>
        <div className="todo-list">
          <div className="todo-list-item">
            <h3>Task</h3>
            <p><b>Description</b></p>
          </div>
        </div>
      </div>


    </div >

  );
}

export default App;