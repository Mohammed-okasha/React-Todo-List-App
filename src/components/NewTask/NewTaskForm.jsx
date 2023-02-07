import { useState, useRef } from "react";
// Components
import { Input, Select } from "../index";
import TaskFormActions from "../UI/TaskFormActions";
// toast
import { toast } from 'react-toastify';
//!=======================================================
const NewTaskFrom = (props) => {
    const titleInputRef = useRef("");
    const selectStatusRef = useRef();
    const [formIsValid, setFormIsValid] = useState(true);

    // Submit Handler
    const submitHandler = (e) => {
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value.trim().toLowerCase();
        const enteredStatus = selectStatusRef.current.value;

        // Call validFormHandler fun
        validFormHandler(enteredTitle, enteredStatus);
    };

    // Valid Form Handler
    const validFormHandler = (taskTitle, taskStatus) => {
        if (!taskTitle) {
            setFormIsValid(false);
            toast.error('please enter a title!', {
                position: "bottom-left",
                autoClose: 2000,
                theme: "colored",
            });

            return;
        };

        // Task Data
        const taskData = {title: taskTitle, status: taskStatus};

        // Call props.onCreateTask function
        props.onCreateTask(taskData);

        // Reset Form Values
        setFormIsValid(true);
        titleInputRef.current.value = "";
    };

    return (
        <form onSubmit={submitHandler}>
            <Input
                label="title"
                inputIsValid={formIsValid}
                input={{
                    ref: titleInputRef,
                    type: "text",
                    id: "task-title",
                    name: "task-title",
                }}
            />
            <Select
                label="status"
                select={{
                    ref: selectStatusRef,
                    defaultValue: "incomplete",
                    id: "task-status",
                    name: "task-status"
                }}
            >
                <option value="incomplete">incomplete</option>
                <option value="completed">completed</option>
            </Select>

            <TaskFormActions
                onCloseModal={props.onHideModal}
                text="add task"
            />
        </form>
    );
};

export default NewTaskFrom;