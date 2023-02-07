import classes from "./ClearTasksModal.module.css";
// UI Components
import { Modal, Card, ConfirmationActions } from "../index";
//!===========================================================
const ClearTasksModal = (props) => {
    return (
        <Modal onCloseModal={props.onHideModal}>
            <Card>
                <h3 className={classes.warning_text}>
                    are you sure you want
                    <br/>
                    clear your tasks?
                </h3>

                <ConfirmationActions
                    removeBtnText="clear"
                    onHideModal={props.onHideModal}
                    onRemove={props.onClearTasks}
                />
            </Card>
        </Modal>
    );
};

export default ClearTasksModal;