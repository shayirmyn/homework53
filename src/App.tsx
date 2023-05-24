import React from 'react';
import ToDoList from "./ToDoLIst/ToDoList";
import './App.css';


const App = () => {

    return (
        <div className="App">
            <ToDoList inputValue="hello" />
        </div>
    );
};

export default App;
