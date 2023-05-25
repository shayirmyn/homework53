import React, { useState} from 'react';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from './Task/Task';
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

    const inputAddTask = (event: React.FormEvent) => {
        event.preventDefault();
        if (currentTask !== "") {
            const newTask: Task = {
                task: currentTask,
                id: Date.now().toString(),
            };

            setAddTask([...addTask, newTask]);
            setCurrentTask("");
           return (
                <div>
                    <span>{currentTask}</span>
                </div>
            )
        }
    };

    const deleteTask = (taskId: string) => {
        setAddTask(addTask.filter((task) => task.id !== taskId));
    };

    const showTask = addTask.map(show => {
        return <Task task={show.task} key={show.id} onRemoveTask={() => deleteTask(show.id)}/>
    })

    return (
        <div className="App">
            <AddTaskForm
                         inputValue={currentTask}
                         onChange={inputChange}
                         onSubmit={inputAddTask}
            />
            {showTask}
        </div>
    );
};

export default App;
