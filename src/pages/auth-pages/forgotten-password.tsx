import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
// import logo from '../assets/logo.png'

const ForgottenPassword = () => {
  return (
    <main className="flex h-screen w-screen">
       {/* ***responsive marker */}
       <div className="h-full w-3/4 bg-primary hidden md:block">1</div>

<div className="h-screen relative w-full p-12">
  {/* ***responsive marker */}
<div className="m-auto md:p-10 md:w-full" >
      <div className="absolute top-0 right-0 p-4 text-xs">
        Not Registered?{" "}
        <Link to="/signup" className="text-primary hover:underline">
          Create an Account
        </Link>{" "}
      </div>
      <div className="">
        <Link to="/">
          {/* <img src={logo} alt="cardepay" width={150} className="logo" /> */}
        </Link>
        <h1 className="font-bold text-3xl py-2">Forgotten Password</h1>
        <p className="text-xs">
        Recover your Forgotten Password
        </p>
      </div>

      <div className="py-12">
        <Input
          label="Username"
          type="text"
          placeholder="Enter your Username"
          id="username"
        />
        <button className="p-3 py-4 text-white bg-primary text-xs w-full transition-all hover:text-black">
          Recover My Account
        </button>
        <Link
          to="/login"
          className="my-4 block text-xs  transition-all text-primary hover:underline "
        >
          Login with Password 
        </Link>
      </div>
    </div>
    </div>
  </main>
  );
};

export default ForgottenPassword;