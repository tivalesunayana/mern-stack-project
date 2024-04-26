import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
export default function SignIn() {
  const [formData, setFormData] = useState({});
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(false);
  const { loading, error } = useSelector((state) => state.user);
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
        dispatch(signInFailure("Sign in failed"));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      //   setLoading(false);
      //   setError(false);
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className=" text-xl font-semibold items-center text-center">
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
        <input
          type="password"
          id="password"
          placeholder="password"
          className="p-3 bg-slate-100"
          onChange={handleChange}
        ></input>
        <button
          disabled={loading}
          className="p-3 bg-red-500 rounded hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}{" "}
        </button>
      </form>
      <div className="flex gap-4">
        <p>Dont have account ?</p>
        <Link to={"/sign-up"}>
          <span className="text-sky-500">Sign Up</span>
        </Link>
      </div>
      <p className="text-red-500">{error && "somthing went wrong"}</p>
    </div>
  );
}
