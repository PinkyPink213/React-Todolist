import React from 'react';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
            <TodoInput />
            <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
