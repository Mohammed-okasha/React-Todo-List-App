import React from "react-dom";
// Modal Components
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
// UI Components
import Card from "../Card";
// Select overlays Portal
const overlays = document.getElementById("overlays");
//!===================================================
const Modal = (props) => {
    return (
        <>
            {React.createPortal(<Backdrop onClick={props.onCloseModal} /> , overlays)}
            {React.createPortal(
                <ModalOverlay onClose={props.onCloseModal}>
                    {props.children}
                </ModalOverlay>,
                overlays
            )}
        </>
    );
};

export default Modal;