import { useState, useCallback } from "react";
// Takas Provider
import TasksProvider from "./context/TasksProvider";
// Tasks List Components
import {
  NewTask,
  TodoListActions,
  TasksList

} from "./components";
// toast
import { ToastContainer } from 'react-toastify';
//!=============================================================
function App() {
  // console.log("App Running");
  const [AddTaskIsShown, setAddTaskIsShown] = useState(false);

  // Show Add Task Modal Handler
  const showAddTaskModalHandler = useCallback(() => {
    setAddTaskIsShown(true);
  }, []);

  // Hide Add Task Modal Handler
  const hideAddTaskModalHandler = useCallback(() => {
    setAddTaskIsShown(false);
  }, []);

  return (
      <>
        <ToastContainer />

        <TasksProvider>
          {AddTaskIsShown && <NewTask onHideModal={hideAddTaskModalHandler} />}
          <TodoListActions onShowModal={showAddTaskModalHandler}/>
          <TasksList />
        </TasksProvider>
      </>
  );
};

export default App;