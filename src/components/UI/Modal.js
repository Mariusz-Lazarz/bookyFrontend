import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed h-screen w-screen bg-gray-500/70 top-0 left-0 z-10"
      onClick={props.onClick}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white w-screen sm:w-1/3 xl:w-1/4  divide-y z-20">
      {props.content}
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay content={props.content} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
