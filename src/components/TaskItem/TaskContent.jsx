import React from "react";
import CheckButton from "./CheckButton";
import { format } from "date-fns";
// classes
import classes from "./TaskContent.module.css";
//!=============================================================
const TaskContent = (props) => {
    // console.log("TaskContent Running");
    const {status, title, date, checked, onTaskStatusChange } = props;

    // Task Title Classes
    const taskTitleClasses = status === "completed" ?
    `${classes.task_title} ${classes.completed}`
    :
    classes.task_title;

    // Task Date
    const taskDate = format(new Date(date), 'p, MM/dd/yyyy');

    return (
        <div className={classes.task_content}>
            <CheckButton
                checked={checked}
                onTaskStatusChange={onTaskStatusChange}
            />

            <div className={classes.task_info}>
                <h5 className={taskTitleClasses}>
                    {title}
                </h5>
                <p className={classes.task_date}>
                    {taskDate}
                </p>
            </div>
        </div>
    );
};

export default React.memo(TaskContent);