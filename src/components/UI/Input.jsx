import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={`${classes.input}`}>
            <label htmlFor={props.input.id}>
                {props.label}
            </label>
            <input ref={ref} {...props.input}
                className={!props.inputIsValid ? classes.invalid : ""}
            />
        </div>
    );
});

export default Input;