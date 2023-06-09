import { Link } from "react-router-dom";
import {Input} from "../../components";
import '../style/style.css'
import React from "react";

function Login() {
  return (
    <main className="flex h-screen w-screen slide-top" style={{marginTop:100}}>
      {/* ***responsive marker */}
      <div className="sign-bg h-full w-3/4 bg-primary hidden md:block"></div>
  
      <div className="h-screen relative w-full p-12">
        {/* ***responsive marker */}
        <div className="m-auto md:p-10 md:w-full">
          <div className=" absolute top-0 right-0 p-4 text-xs">
            Not Registered?{" "}
            <Link to="/signup" className="text-primary  hover:underline">
              Create an Account
            </Link>{" "}
          </div>
          <div className="">
            <h1 className="font-bold text-3xl py-2">Login</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="py-12">
            <Input
              label="Email"
              type="email"
              placeholder="Enter Email"
              id="email" />
            <Input
              label="Password"
              type="password"
              placeholder="Enter Password"
              id="password" />

            <button className="p-3 py-4 text-white  bg-primary text-xs w-full transition-all hover:bg-black">
              Login
            </button>
            <Link
              to="/reset"
              className="my-4 block text-xs  transition-all text-primary hover:underline "
            >
              Forgotten Password ?
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
