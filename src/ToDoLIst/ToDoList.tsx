import React from 'react';

interface IToDoList {
    inputValue: string;
}

const ToDoList: React.FC<IToDoList> = props => {

    return (
        <div className="toDoList">
            <form className="form">
                <input className="inputAdd" type="text" placeholder="Add new task.." value={props.inputValue}/>
                <button className="btnAdd">Add</button>
            </form>
        </div>
    );
};

export default ToDoList;