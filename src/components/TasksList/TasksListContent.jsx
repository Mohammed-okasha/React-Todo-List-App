import  { useContext } from "react";
import TasksContext from "../../context/tasks-context";
// UI Components
import { Container } from "../index";
import TaskItem from "../TaskItem/TaskItem";
// classes
import classes from "./TasksList.module.css";
//!=============================================================
const TasksListContent = (props) => {
    const { tasksItems, filterStatus } = useContext(TasksContext);
    // Tasks List
    const tasksList = tasksItems.filter((task) => {
        if (filterStatus === "all") {
            return task;
        };

        return task.status === filterStatus;
    });;

    // Content
    let content = <h3>there are no tasks!</h3>;

    if (tasksList.length > 0) {
        content = (
            <ul>
                {tasksList.map(item =>
                    <TaskItem
                        key={item.id}
                        id={item.id}
                        taskTitle={item.title}
                        taskStatus={item.status}
                        taskDate={item.date}
                    />
                )}
            </ul>
        );
    };

    return (
        <>
            <section className={classes.tasks}>
                <Container>
                    <div className={classes.tasks_list}>
                        {content}
                    </div>
                    <button type="button"
                        className={classes.clear_btn}
                        onClick={props.onShowClearTaskModal}
                    >
                        clear
                    </button>
                </Container>
            </section>
        </>
    );
};

export default TasksListContent;