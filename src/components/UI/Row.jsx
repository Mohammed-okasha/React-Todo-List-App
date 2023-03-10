import classes from "./Row.module.css";

const Row = (props) => {
    return (
        <div className={`${classes.row} ${props.className || ""}`}>
            {props.children}
        </div>
    );
};

export default Row;