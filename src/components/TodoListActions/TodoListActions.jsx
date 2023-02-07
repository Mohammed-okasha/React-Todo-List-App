import React, { useState, useContext } from "react";
import TasksContext from "../../context/tasks-context";
import FilterTasks from "./FilterTasks";
// UI Components
import {
    Title,
    Container,
    Row,
    Button,
} from "../index";
//!==================================================================
const TodoListActions = (props) => {
    // console.log("TodoListActions Running");

    const {
        filterStatus: initialFilterStatus,
        updateFilterStatus
    } = useContext(TasksContext);

    const [filterStatus, setFilterStatus] = useState(initialFilterStatus);

    // Filter Status Change Handler
    const filterStatusChangeHandler = (e) => {
        setFilterStatus(e.target.value);

        // Call updateFilterStatus function
        updateFilterStatus(e.target.value);
    };

    return (
        <>
            <Title />
            <section>
                <Container>
                    <Row>
                        <Button onClick={props.onShowModal}>
                            add task
                        </Button>
                        <FilterTasks
                            onFilterStatusChange={filterStatusChangeHandler}
                            defaultFilterStatus={filterStatus}
                        />
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default React.memo(TodoListActions);
