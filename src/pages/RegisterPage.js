import Modal from "../components/UI/Modal";
import RegisterForm from "../components/AuthForm/RegisterForm";
import { useState } from "react";

const RegisterPage = () => {
  const [toggleModal, setTogggleModal] = useState(false);
  const modalOnClick = () => {
    setTogggleModal((prevState) => !prevState);
  };
  return (
    <>
      <button onClick={modalOnClick}>Toggle modal</button>
      {toggleModal && (
          <Modal
            onClick={modalOnClick}
            onTransition={toggleModal}
            content={<RegisterForm onClick={modalOnClick} />}
          />
      )}
    </>
  );
};

export default RegisterPage;
