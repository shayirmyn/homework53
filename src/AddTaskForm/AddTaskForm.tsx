import React, {ReactEventHandler} from 'react';

interface IAddTaskForm {
    inputValue: string;
    onChange: ReactEventHandler;
    add: ReactEventHandler;
    onClick: ReactEventHandler;
}

const AddTaskForm: React.FC<IAddTaskForm> = props => {

    return (
        <div className="toDoList">
            <form className="form" onClick={props.onClick}>
                <input className="inputAdd"
                       type="text"
                       placeholder="Add new task.."
                       value={props.inputValue}
                       onChange={props.onChange}
                />
                <button className="btnAdd"
                        onClick={props.add}
                >Add</button>
            </form>
        </div>
    );
};

export default AddTaskForm;