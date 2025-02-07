import React, { useContext, useState } from "react";
import { Context } from "../Context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { Backendurl, settoken} = useContext(Context)

  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === "Sign Up") {

      const { data } = await axios.post(
        Backendurl + "/api/user/register",
        { email, password, name },
        { withCredentials:true }
      );

      if (data.success) {
        toast.success(data.message);
        localStorage.setItem("token", data.Usertoken)
        settoken(true)
      } else {
        toast.error(data.message);
      }

    } else {

      const { data } = await axios.post(
        Backendurl + "/api/user/login",
        { email, password },
        {withCredentials:true }
      );

      if (data.success) {
        toast.success(data.message);
        localStorage.setItem("token", data.Usertoken)
        settoken(true)
      } else {
        toast.error(data.message);
      }
    }
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <form
        className="border border-gray-400 py-5 px-4 sm:px-8 sm:py-10 rounded-lg shadow-lg"
        onSubmit={(e) => onSubmitHandler(e)}
      >
        <p className="text-xl sm:text-2xl text-gray-800 font-semibold pb-2">
          {state === "Login" ? "Login" : "Create Account"}
        </p>
        <p className="text-gray-600 pb-2 sm:text-sm text-[12px] sm:pb-4 ">
          Please {state === "Login" ? "Login" : "sign up"} to book appointment{" "}
        </p>
        {state === "Sign Up" && (
          <div className="flex flex-col">
            <p className="text-gray-600 text-[12px] md:text-sm">Full Name</p>
            <input
              className="border border-gray-300 mb-2 py-1 rounded-sm"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div className="flex flex-col">
          <p className="text-gray-600 text-[12px] md:text-sm">Email</p>
          <input
            className="border border-gray-300 mb-2 py-1 rounded-sm"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-gray-600 text-[12px] md:text-sm">Password</p>
          <input
            className="border border-gray-300 mb-2 py-1 rounded-sm"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-center w-full text-white py-2 sm:text-lg text-md rounded-lg mt-2 mb-4 sm:mt-3 sm:mb-5"
        >
          {state === "Login" ? "Login" : "Create Account"}
        </button>

        <div>
          {state === "Login" ? (
            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <span
                className="text-primary underline text-[12px] md:text-sm cursor-pointer"
                onClick={() => setState("Sign Up")}
              >
                Signup here
              </span>
            </p>
          ) : (
            <p className="text-gray-600 text-[12px] md:text-sm">
              Already have an account?
              <span
                className="text-primary underline text-sm cursor-pointer"
                onClick={() => setState("Login")}
              >
                Login here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
