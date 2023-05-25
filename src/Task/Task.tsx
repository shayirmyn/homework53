import React from 'react';

interface ITask {
    task: string,
    key: string,
    onRemoveTask: React.MouseEventHandler,
}

const Task: React.FC<ITask> = props => {


    return (
        <div className="taskBlock">
            <span className="taskSpan">{props.task}</span>
            <button className="btnDelete" onClick={props.onRemoveTask}>Delete</button>
        </div>
    );
};

export default Task;