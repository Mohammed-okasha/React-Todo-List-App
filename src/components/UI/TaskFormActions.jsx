import React from "react";
import Button from "../UI/Button";
import classes from "./TaskFormActions.module.css";
const {task_form_actions, close_modal} = classes;
//!======================================================
const TaskFormActions = (props) => {
    // console.log("TaskFormActions Running");

    return (
        <div className={task_form_actions}>
            <Button type="submit">
                {props.text}
            </Button>
            <button
                className={close_modal}
                type="button"
                onClick={props.onCloseModal}
            >
                cancel
            </button>
        </div>
    );
};

export default React.memo(TaskFormActions);