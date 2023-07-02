import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <CSSTransition in={props.in} timeout={500} unmountOnExit mountOnEnter>
      <div
        className="fixed h-screen w-screen bg-gray-500/70 top-0 left-0 z-10"
        onClick={props.onClick}
      ></div>
    </CSSTransition>
  );
};

const ModalOverlay = (props) => {
  return (
    <CSSTransition
      in={props.in}
      timeout={500}
      classNames={{
        enter: classes.myNodeEnter,
        enterActive: classes.myNodeEnterActive,
        exit: classes.myNodeExit,
        exitActive: classes.myNodeExitActive,
      }}
      mountOnEnter
      unmountOnExit
    >
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 rounded-lg bg-white w-1/4 divide-y z-20">
        {props.content}
      </div>
    </CSSTransition>
  );
};

const Modal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop onClick={props.onClick} in={props.in} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay content={props.content} in={props.in} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
