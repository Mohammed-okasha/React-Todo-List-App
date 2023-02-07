import React from "react";
import classes from "./Select.module.css";

const Select = React.forwardRef((props, ref) => {
    return (
        <div className={classes.select}>
            <label htmlFor={props.select.id}>
                {props.label}
            </label>
            <select ref={ref} {...props.select}>
                {props.children}
            </select>
        </div>
    );
});

export default Select;