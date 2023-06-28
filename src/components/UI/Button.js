const Button = (props) => {
  return (
    <button
      type={props.type}
      disabled={!props.formIsValid}
      className="rounded-lg p-4 w-full bg-rose-500 text-white mb-3"
    >
      {props.text}
    </button>
  );
};

export default Button;
