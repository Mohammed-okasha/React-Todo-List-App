import React from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
// classes
import classes from "./TaskActions.module.css";
//!=============================================================
const TaskActions = (props) => {
    // console.log("TaskActions Running");

    return (
        <div className={classes.task_actions}>
            <button
                type="button"
                className={classes.remove_btn}
                title="Remove"
                onClick={props.onShowConfirm}
            >
                <FaTrash />
            </button>
            <button 
                type="button"
                className={classes.edit_btn}
                title="Edit"
                onClick={props.onShowEditTask}
            >
                <FaPencilAlt />
            </button>
        </div>
    );
};

export default React.memo(TaskActions);