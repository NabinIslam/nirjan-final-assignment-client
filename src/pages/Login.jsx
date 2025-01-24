import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="container py-20">
        <div>
          <h1 className="mb-5 text-center text-3xl font-bold">Login</h1>
        </div>
        <form className="mx-auto max-w-xs space-y-3" action="">
          <input
            className="w-full rounded-md border border-black border-opacity-10 text-sm"
            type="email"
            placeholder="Email address"
            required
          />
          <input
            className="w-full rounded-md border border-black border-opacity-10 text-sm"
            type="password"
            placeholder="Password"
            required
          />
          <Button className="text-sm" gradientDuoTone="purpleToBlue">
            Login
          </Button>

          <p className="text-sm">
            Don't have an account?{" "}
            <Link className="font-medium hover:underline" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
