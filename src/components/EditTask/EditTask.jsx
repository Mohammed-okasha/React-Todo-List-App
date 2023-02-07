// UI Components
import { Modal, Card } from "../index";
import EditTaskForm from "./EditTaskForm";
//!=============================================================
const EditTask = (props) => {
    // console.log("EditTask Running");
    return (
        <Modal onCloseModal={props.onHideModal}>
            <Card>
                <h3>edit todo</h3>
                <EditTaskForm
                    onHideModal={props.onHideModal}
                    onUpdateTask={props.onUpdateTask}
                />
            </Card>
        </Modal>
    );
};

export default EditTask;