import { useState, useContext } from "react";
import TasksContext from "../../context/tasks-context";
// TasksList Components
import TasksListContent from "./TasksListContent";
import ClearTasksModal from "./ClearTasksModal";
// toast
import { toast } from 'react-toastify';
//!=============================================================
const TasksList = () => {
    const [clearTasksModal, setClearTasksModal] = useState(false);
    const tasksCtx = useContext(TasksContext);

    // Show Clear Tasks Modal
    const showClearTasksModal = () => setClearTasksModal(true);
    // Hide Clear Tasks Modal
    const hideClearTasksModal = () => setClearTasksModal(false);

    // Clear Tasks Handler
    const clearTasksHandler = () => {
        // Call clearTasks
        tasksCtx.clearTasks();

        // Call Hide Clear Tasks Modal
        hideClearTasksModal();

        toast.success('your tasks cleared successfully', {
            position: "top-left",
            autoClose: 2000,
            theme: "colored",
        });
    };

    return (
        <>
            {clearTasksModal && <ClearTasksModal
                onHideModal={hideClearTasksModal}
                onClearTasks={clearTasksHandler}
            />
            }
            <TasksListContent onShowClearTaskModal={showClearTasksModal} />
        </>
    );
};

export default TasksList;