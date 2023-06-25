import Card from "../UI/Card";
import { GrClose } from "react-icons/gr";

const LoginForm = () => {
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
          <form className=" flex flex-col gap-2">
            <div>
              <input
                type="text"
                id="name"
                placeholder="Your name..."
                className="rounded-md outline-none p-1 w-full"
              ></input>
              <p>Error mess</p>
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Your email..."
                className="rounded-md outline-none p-1 w-full"
              ></input>
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Your password..."
                className="rounded-md outline-none p-1 w-full"
              ></input>
            </div>
          </form>
        </div>
      </Card>
    </>
  );
};

export default LoginForm;
