import { GrClose } from "react-icons/gr";
import useInput from "../../hooks/use-input";
import Button from "../UI/Button";

const RegisterForm = (props) => {
  const {
    enteredValue: enteredName,
    enteredValueIsValid: enteredNameIsValid,
    valueInputIsInvalid: nameInputIsInvalid,
    valueOnChange: nameOnChange,
    valueOnBlur: nameOnBlur,
    valueReset: nameReset,
  } = useInput((enteredName) => enteredName.trim() !== "");

  const {
    enteredValue: enteredEmail,
    enteredValueIsValid: enteredEmailIsValid,
    valueInputIsInvalid: emailInputIsInvalid,
    valueOnChange: emailOnChange,
    valueOnBlur: emailOnBlur,
    valueReset: emailReset,
  } = useInput((enteredEmail) => enteredEmail.trim().includes("@"));

  const {
    enteredValue: enteredPassword,
    enteredValueIsValid: enteredPasswordIsValid,
    valueInputIsInvalid: passwordInputIsInvalid,
    valueOnChange: passwordOnChange,
    valueOnBlur: passwordOnBlur,
    valueReset: passwordReset,
  } = useInput((enteredPassword) => enteredPassword.trim().length > 6);

  const {
    enteredValue: enteredConfirmPassword,
    enteredValueIsValid: enteredConfirmPasswordIsValid,
    valueInputIsInvalid: confirmPasswordInputIsInvalid,
    valueOnChange: confirmPasswordOnChange,
    valueOnBlur: confirmPasswordOnBlur,
    valueReset: confirmPasswordReset,
  } = useInput(
    (enteredConfirmPassword) =>
      enteredConfirmPassword.trim() === enteredPassword.trim()
  );

  let formIsValid = false;
  if (
    enteredNameIsValid &&
    enteredPasswordIsValid &&
    enteredEmailIsValid &&
    enteredConfirmPasswordIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!enteredNameIsValid || !enteredEmailIsValid || !enteredPasswordIsValid)
      return;
    nameReset();
    passwordReset();
    emailReset();
    confirmPasswordReset();
  };

  const nameInputClasses = nameInputIsInvalid
    ? " border-red-700 border-2"
    : "border-2";

  const passwordInputClasses = passwordInputIsInvalid
    ? " border-red-700 border-2"
    : "border-2";

  const emailInputClasses = emailInputIsInvalid
    ? " border-red-700 border-2"
    : "border-2";
  const confirmPasswordInputClasses = confirmPasswordInputIsInvalid
    ? " border-red-700 border-2"
    : "border-2";
  return (
    <>
      <div className="flex justify-between items-center p-2">
        <div
          className="hover:bg-orange-50 rounded-full p-1"
          onClick={props.onClick}
        >
          <GrClose size={13} />
        </div>
        <div>
          <p>Login in</p>
        </div>
        <div></div>
      </div>
      <div className="p-2">
        <h1 className="text-lg font-medium mb-2">Welcome to booky</h1>
        <form className=" flex flex-col gap-2" onSubmit={submitHandler}>
          <div>
            <input
              type="text"
              id="name"
              placeholder="Your name..."
              value={enteredName}
              onChange={nameOnChange}
              onBlur={nameOnBlur}
              className={`${nameInputClasses} rounded-md p-1 w-full outline-none`}
            ></input>
            {nameInputIsInvalid && (
              <p className="text-red-700 font-semibold">Enter a valid name!</p>
            )}
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Your email..."
              value={enteredEmail}
              onChange={emailOnChange}
              onBlur={emailOnBlur}
              className={`${emailInputClasses} rounded-md p-1 w-full outline-none`}
            ></input>
            {emailInputIsInvalid && (
              <p className="text-red-700 font-semibold">Enter a valid email!</p>
            )}
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Your password..."
              value={enteredPassword}
              onChange={passwordOnChange}
              onBlur={passwordOnBlur}
              className={`${passwordInputClasses} rounded-md p-1 w-full outline-none`}
            ></input>
            {passwordInputIsInvalid && (
              <p className="text-red-700 font-semibold">
                Password has to be longer than 6 chars!
              </p>
            )}
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password..."
              value={enteredConfirmPassword}
              onChange={confirmPasswordOnChange}
              onBlur={confirmPasswordOnBlur}
              className={`${confirmPasswordInputClasses} rounded-md p-1 w-full outline-none`}
            ></input>
            {confirmPasswordInputIsInvalid && (
              <p className="text-red-700 font-semibold">
                Password does not match
              </p>
            )}
          </div>
          <div>
            <Button formIsValid={formIsValid} type="submit" text="Submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
