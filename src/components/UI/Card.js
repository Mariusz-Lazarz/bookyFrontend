const Card = (props) => {
  return (
    <div className="rounded-lg bg-green-600 w-1/4 divide-y">
      {props.children}
    </div>
  );
};

export default Card;
