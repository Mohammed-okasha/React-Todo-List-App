import classes from "./CheckButton.module.css";
//!=============================================================
const CheckButton = ({ checked, onTaskStatusChange }) => {
    return (
        <button
            type="button"
            className={classes.check_button}
        >
            <input type="checkbox"
                onChange={onTaskStatusChange}
                checked={checked}
            />
        </button>
    );
};

export default CheckButton;