import Card from "../UI/Card";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const LoginForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && nameIsTouched;

  const nameOnChange = (e) => {
    setEnteredName(e.target.value);
  };

  const nameOnBlur = (e) => {
    setNameIsTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setNameIsTouched(true);
    if (!enteredNameIsValid) return;
    console.log(enteredName);
    setEnteredName("");
    setNameIsTouched(false);
  };
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
                className="rounded-md outline-none p-1 w-full"
              ></input>
              {nameInputIsInvalid && (
                <p className="text-red-700">Enter a valid name!</p>
              )}
            </div>
          </form>
        </div>
      </Card>
    </>
  );
};

export default LoginForm;
