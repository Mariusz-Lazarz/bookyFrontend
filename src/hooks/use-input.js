import { useState } from "react";

const useInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueIsTouched, setValueIsTouched] = useState(false);

  const enteredValueIsValid = validate(enteredValue);
  const valueInputIsInvalid = !enteredValueIsValid && valueIsTouched;

  const valueOnChange = (e) => {
    setEnteredValue(e.target.value);
  };

  const valueOnBlur = (e) => {
    setValueIsTouched(true);
  };

  const valueReset = () => {
    setEnteredValue("");
    setValueIsTouched(false);
  };
  return {
    enteredValue,
    enteredValueIsValid,
    valueInputIsInvalid,
    valueOnChange,
    valueOnBlur,
    valueReset,
  };
};

export default useInput;
