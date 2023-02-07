// UI Components
import Button from "../UI/Button";
// classes
import classes from "./ConfirmationActions.module.css";
//!=============================================================
const ConfirmationActions = (props) => {
    return (
        <div className={classes.confirmation_actions}>
        <button
            className={classes.remove_btn}
            type="button"
            onClick={props.onRemove}
        >
            {props.removeBtnText}
        </button>
        <Button onClick={props.onHideModal}>
            cancel
        </Button>
    </div>
    );
};

export default ConfirmationActions;