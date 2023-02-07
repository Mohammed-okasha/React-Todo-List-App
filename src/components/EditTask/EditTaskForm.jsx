import { useState } from "react";
import { useRef } from "react";
// UI Components
import { Input, Select } from "../index";
import TaskFormActions from "../UI/TaskFormActions";
// toast
import { toast } from 'react-toastify';
//!=============================================================
const EditTaskForm = (props) => {
    const titleInputRef = useRef("");
    const selectStatusRef = useRef();
    const [formIsValid, setFormIsValid] = useState(true);

    // Submit Handler
    const submitHandler = (e) => {
        e.preventDefault();

        const updatedTaskTitle = titleInputRef.current.value.trim().toLowerCase();
        const updatedTaskStatus = selectStatusRef.current.value;

        // Call validForm
        validForm(updatedTaskTitle, updatedTaskStatus);
    };

    // Valid Form
    const validForm = (taskTitle, taskStatus) => {
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
        // Call props.onUpdateTask
        props.onUpdateTask(taskData);

        // Reset Form Values
        setFormIsValid(false);
        titleInputRef.current.value = "";
    };

    return (
        <form onSubmit={submitHandler}>
            <Input
                ref={titleInputRef}
                label="title"
                inputIsValid={formIsValid}
                input={{
                    id: "task-title",
                    type: "text",
                    name: "edit-task",
                }}
            />
            <Select
                ref={selectStatusRef}
                label="status"
                select={{
                    defaultValue: "incomplete",
                    id: "task-status",
                    name: "task-status",
                }}
            >
                <option value="incomplete">incomplete</option>
                <option value="completed">completed</option>
            </Select>
            <TaskFormActions
                onCloseModal={props.onHideModal}
                text="edit task"
            />
        </form>
    );
};

export default EditTaskForm;