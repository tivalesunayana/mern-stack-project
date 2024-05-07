import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";
export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(false);
  const { loading, error } = useSelector((state) => state.user);
  console.log(loading, error);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   setLoading(true);
      //   setError(false);
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        // setError(true);
        // return;
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      //   setLoading(false);
      //   setError(false);
      dispatch(signInFailure(error));
    }
  };
  return (
    <div className="p-5 max-w-lg mx-auto">
      <h2 className=" text-xl font-semibold items-center text-center my-6">
        Sign In
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-5">
        {" "}
        <input
          type="email"
          id="email"
          placeholder="email"
          className="p-3 bg-slate-100"
          onChange={handleChange}
        ></input>
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            onChange={handleChange}
            placeholder="password"
            className="px-4 py-2  w-full bg-slate-100  border-gray-300 rounded transition ease-in-out"
          />
          {showPassword ? (
            <AiFillEyeInvisible
              className="absolute right-3 top-3 text-xl cursor-pointer"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          ) : (
            <AiFillEye
              className="absolute right-3 top-3 text-xl cursor-pointer"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          )}
        </div>
        <button
          disabled={loading}
          className="p-3 bg-gray-400 rounded hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}{" "}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-4">
        <p>Dont have account ?</p>
        <Link to={"/sign-up"}>
          <span className="text-sky-500">Sign Up</span>
        </Link>
      </div>
      <p className="text-red-500">
        {error ? error.message || "somthing went wrong!" : ""}
      </p>
    </div>
  );
}
