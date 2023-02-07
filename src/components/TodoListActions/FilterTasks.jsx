import React from "react";
import classes from "./FilterTasks.module.css";

const FilterTasks = (props) => {
    // console.log("SortTasks Running");

    return (
        <div className={classes.filter_tasks}>
            <select name="filter-tasks"
                onChange={props.onFilterStatusChange}
                value={props.defaultFilterStatus}
            >
                <option value="all">all</option>
                <option value="incomplete">incomplete</option>
                <option value="completed">completed</option>
            </select>
        </div>
    );
};

export default React.memo(FilterTasks);