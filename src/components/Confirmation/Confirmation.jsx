// UI Components
import Modal from "../UI/Modal/Modal";
import Card from "../UI/Card";
import ConfirmationActions from "./ConfirmationActions";
// Icons
import { FaExclamation } from "react-icons/fa";
// classes
import classes from "./Confirmation.module.css";
//!=============================================================
const Confirmation = (props) => {
    // console.log("Confirmation Running");

    return (
        <Modal onCloseModal={props.onHideModal}>
            <Card className={classes.confirmation}>
                <div className={classes.alert_icon}>
                    <FaExclamation />
                </div>
                <div className={classes.confirmation_title}>
                    are you sure you want delete <span>{props.title}</span>?
                </div>
                <ConfirmationActions
                    removeBtnText="delete"
                    onRemove={props.onRemoveTask}
                    onHideModal={props.onHideModal}
                />
            </Card>
        </Modal>
    );
};

export default Confirmation;