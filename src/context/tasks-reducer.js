import { defaultTasksState } from "./TasksProvider";
//!======================================================
const tasksReducer = (state, action) => {
    if (action.type === "ADD_TASK") {
        const updatedTasks = [action.payload, ...state.tasks];

        return {
            tasks: updatedTasks,
            filterStatus: state.filterStatus
        };
    };

    if (action.type === "REMOVE_TASK") {
        // Updated Tasks
        const updatedTasks = state.tasks.filter(item => item.id !== action.id);

        return {
            tasks: updatedTasks,
            filterStatus: state.filterStatus
        };
    };

    if (action.type === "EDIT_TASK") {
        // Updated Tasks
        const updatedTasks = state.tasks.map(task => {
            if (task.id === action.payload.id) {
                const updatedTask = {
                    id: task.id,
                    date: task.date,
                    title: action.payload.title,
                    status: action.payload.status
                };

                task = updatedTask;
            };

            return task;
        });

        return {
            tasks: updatedTasks,
            filterStatus: state.filterStatus
        };
    };

    if (action.type === "UPDATE_FILTER_STATUS") {
        return {
            tasks: state.tasks,
            filterStatus: action.payload
        };
    };

    if (action.type === "CLEAR_TASKS") {
        return {
            tasks: [],
            filterStatus: action.filterStatus
        };
    };

    return defaultTasksState;
};


export default tasksReducer;