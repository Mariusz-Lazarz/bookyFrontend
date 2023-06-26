import Card from "../UI/Card";
import { GrClose } from "react-icons/gr";
import useInput from "../../hooks/use-input";

const LoginForm = () => {
  const {
    enteredValue: enteredName,
    enteredValueIsValid: enteredNameIsValid,
    valueInputIsInvalid: nameInputIsInvalid,
    valueOnChange: nameOnChange,
    valueOnBlur: nameOnBlur,
    valueReset,
  } = useInput((enteredName) => enteredName.trim() !== "");

  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!enteredNameIsValid) return;
    valueReset();
  };

  const nameInputClasses = nameInputIsInvalid
    ? " border-red-700 border-2"
    : "border-2";
  return (
    <>
      <Card>
        <div className="flex justify-between items-center p-2">
          <div className="hover:bg-orange-50 rounded-full p-1">
            <GrClose size={13} />
          </div>
          <div>
            <p>Login in</p>
          </div>
          <div></div>
        </div>
        <div className="p-2">
          <h1 className="text-lg font-medium mb-2">Hello to booky</h1>
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
                <p className="text-red-700 font-semibold">
                  Enter a valid name!
                </p>
              )}
            </div>
            <div>
              <button
                type="submit"
                disabled={!formIsValid}
                className={`rounded-full p-2 w-full ${
                  !formIsValid ? "bg-slate-500" : "bg-rose-500"
                }`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Card>
    </>
  );
};

export default LoginForm;
