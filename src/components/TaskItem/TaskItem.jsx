import { useState, useContext, useCallback, useEffect } from "react";
import TasksContext from "../../context/tasks-context";
// UI Components
import { Row, Confirmation} from "../index";
// TaskItem Components
import TaskContent from "./TaskContent";
import TaskActions from "./TaskActions";
import EditTask from "../EditTask/EditTask";
// classes
import classes from "./TaskItem.module.css";
// toast
import { toast } from 'react-toastify';
//!=============================================================
const TaskItem = (props) => {
    const tasksCtx = useContext(TasksContext);
    const [checked, setChecked] = useState(false);
    const [conformModal, setConformModal] = useState(false);
    const [editTaskModal, setEditTaskModal] = useState(false);

    // Show Confirm Modal
    const showConfirmModal = useCallback(() => setConformModal(true), []);
    // Hide Confirm Modal
    const hideConfirmModal = () => setConformModal(false);

    // Show Edit Task Modal
    const showEditTaskModal = useCallback(() => setEditTaskModal(true), []);
    // Hide Edit Task Modal
    const hideEditTaskModal = () => setEditTaskModal(false);

    // Remove Task Handler
    const removeTaskHandler = () => {
        tasksCtx.removeTask(props.id);

        toast.success(`${props.taskTitle} removed successfully`, {
            position: "top-left",
            autoClose: 2000,
            theme: "colored",
        });
    };

    // Task Update Handler
    const taskUpdateHandler = useCallback((task) => {
        const createTask = {
            id: props.id,
            title: task.title,
            status: task.status
        };

        // Call Edit Task function
        tasksCtx.editTask(createTask);

        setEditTaskModal(false);

        toast.success(`task updated successfully`, {
            position: "top-left",
            autoClose: 2000,
            theme: "colored",
        });

    }, [props.id, tasksCtx]);

    // Task Status Change Handler
    const taskStatusChangeHandler = useCallback(() => {
        setChecked(prevChecked => !prevChecked);

        const updatedTask = {
            id: props.id,
            title: props.taskTitle,
            status: checked ? "incomplete" : "completed",
        };

        // Call Edit Task function
        tasksCtx.editTask(updatedTask);

    }, [props, checked, tasksCtx]);

    // Side Effect
    useEffect(() => {
        if (props.taskStatus === "completed") {
            setChecked(true);

        } else {
            setChecked(false);
        };

    }, [props.taskStatus]);

    return (
        <>
            <li className={classes.task_item}>
                <Row>
                    <TaskContent
                        status={props.taskStatus}
                        title={props.taskTitle}
                        date={props.taskDate}
                        checked={checked}
                        onTaskStatusChange={taskStatusChangeHandler}
                    />
                    <TaskActions
                        onShowConfirm={showConfirmModal}
                        onShowEditTask={showEditTaskModal}
                    />
                </Row>
            </li>

            {conformModal && <Confirmation
                title={props.taskTitle}
                onHideModal={hideConfirmModal}
                onRemoveTask={removeTaskHandler}
            />
            }

            {editTaskModal && <EditTask
                onHideModal={hideEditTaskModal}
                onUpdateTask={taskUpdateHandler}
            />
            }
        </>
    );
};

export default TaskItem;