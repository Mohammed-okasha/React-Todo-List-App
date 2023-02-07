import { useContext } from "react";
import TasksContext from "../../context/tasks-context";
// Components
import { Modal, Card } from "../index";
import NewTaskFrom from "./NewTaskForm";
// toast
import { toast } from 'react-toastify';
//!====================================================
const NewTask = (props) => {
    // console.log("Add Task Running");
    const tasksCtx = useContext(TasksContext);

    // Create Task Handler
    const createTaskHandler = (task) => {
        // Create Task
        const createTask = {
            id: new Date().getTime().toString() + Math.random(),
            title: task.title,
            status: task.status,
            date: new Date()
        };

        // Call addTask
        tasksCtx.addTask(createTask);

        // Call onHideModal
        props.onHideModal();

        toast.success(`${task.title} added successfully`, {
            position: "top-left",
            autoClose: 2000,
            theme: "colored",
        });
    };

    return (
        <Modal onCloseModal={props.onHideModal}>
            <Card>
                <h3>add todo</h3>
                <NewTaskFrom
                    onHideModal={props.onHideModal}
                    onCreateTask={createTaskHandler}
                />
            </Card>
        </Modal>
    );
};

export default NewTask;
