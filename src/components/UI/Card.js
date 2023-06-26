const Card = (props) => {
  return (
    <div className="rounded-lg bg-white w-1/4 divide-y">{props.children}</div>
  );
};

export default Card;
