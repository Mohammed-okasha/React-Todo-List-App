import React, { useReducer, useEffect } from "react";
import tasksReducer from "./tasks-reducer";
import TasksContext from "./tasks-context";
//!==========================================================
export const defaultTasksState = {
    tasks: localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [],
    filterStatus: "all"
};
//!==========================================================
const TasksProvider = (props) => {
    // console.log("TasksProvider Running");
    const [tasksState, dispatch] = useReducer(tasksReducer, defaultTasksState);

    // Add Task Handler
    const addTaskHandler = (item) => {
        dispatch({type: "ADD_TASK", payload: item});
    };

    // Remove Task Handler
    const removeTaskHandler = (id) => {
        dispatch({type: "REMOVE_TASK", id: id});
    };

    // Edit Task Handler
    const editTaskHandler = (item) => {
        dispatch({type: "EDIT_TASK", payload: item});
    };

    // Update Status Change Handler
    const updateFilterStatusHandler = (filterValue) => {
        dispatch({type: "UPDATE_FILTER_STATUS", payload: filterValue});
    };

    // Clear Tasks Handler
    const clearTasksHandler = () => {
        dispatch({type: "CLEAR_TASKS", filterStatus: "all"});
    };

    // Tasks Context
    const tasksContext = {
        tasksItems: tasksState.tasks,
        filterStatus: tasksState.filterStatus,
        addTask: addTaskHandler,
        removeTask: removeTaskHandler,
        editTask: editTaskHandler,
        updateFilterStatus: updateFilterStatusHandler,
        clearTasks: clearTasksHandler
    };

    const { tasks } = tasksState;

    useEffect(() => {
        // Store Tasks in localStorage
        const storeTasksTimer = setTimeout(() => {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }, 300);

        // Clean Up function
        return () => clearTimeout(storeTasksTimer);

    }, [tasks]);

    return (
        <TasksContext.Provider value={tasksContext}>
            {props.children}
        </TasksContext.Provider>
    );
};

export default TasksProvider;