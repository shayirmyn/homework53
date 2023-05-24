import React, {useState} from 'react';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import './App.css';


const App = () => {

    type Task = {
        task: string;
        id: string;
    };

    const [addTask, setAddTask] = useState([
        {task: "Buy milk", id: "1"},
        {task: "Walk with dog", id: "2"},
        {task: "Do homework", id: "3"},
    ]);

    const [currentTask, setCurrentTask] = useState("");

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(event.target.value);
    };

    const inputAddTask = () => {
        if (currentTask !== "") {
            const newTask: Task = {
                task: currentTask,
                id: Date.now().toString(),
            };

            setAddTask([...addTask, newTask]);
            setCurrentTask("");
        }
    };

    return (
        <div className="App">
            <AddTaskForm task={addTask[1].task}
                         inputValue={currentTask}
                         onChange={inputChange}
                         add={inputAddTask}
            />
        </div>
    );
};

export default App;
