import { FaTimes } from "react-icons/fa";
import classes from "./ModalOverlay.module.css";

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal_overlay}>
            <button type="button"
                className={classes.close_modal}
                onClick={props.onClose}
            >
                <FaTimes fontSize="1rem" />
            </button>
            {props.children}
        </div>
    );
};

export default ModalOverlay;