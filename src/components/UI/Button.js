const Button = (props) => {
  return (
    <button
      type={props.type}
      disabled={!props.formIsValid}
      className="rounded-full p-2 w-full bg-rose-500 text-white"
    >
      {props.text}
    </button>
  );
};

export default Button;
