import React, {ReactEventHandler} from 'react';

interface IAddTaskForm {
    inputValue: string;
    onChange: ReactEventHandler;
    onSubmit: React.FormEventHandler;
}

const AddTaskForm: React.FC<IAddTaskForm> = props => {

    return (
        <div className="toDoList">
            <form className="form" onSubmit={props.onSubmit}>
                <input className="inputAdd"
                       type="text"
                       placeholder="Add new task.."
                       value={props.inputValue}
                       onChange={props.onChange}
                />
                <button type={"submit"} className="btnAdd"
                >Add</button>
            </form>
        </div>
    );
};

export default AddTaskForm;