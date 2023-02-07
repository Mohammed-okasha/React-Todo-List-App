import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
    // console.log("Button Running");

    return (
        <button
            className={classes.button}
            type={props.type || "button"}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default React.memo(Button);