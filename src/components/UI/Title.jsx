import classes from "./Title.module.css";

const Title = () => {
    return (
        <div className={classes.title}>
            <h1>todo list</h1>
            <p>start adding your day tasks</p>
        </div>
    );
};

export default Title;