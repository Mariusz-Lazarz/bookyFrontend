import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return (
    <>
      {createPortal(
        <div
          className="fixed h-screen w-screen bg-gray-500/70 top-0 left-0 z-10"
          onClick={props.onClick}
        ></div>,
        document.getElementById("backdrop-root")
      )}
    </>
  );
};

export default Backdrop;
