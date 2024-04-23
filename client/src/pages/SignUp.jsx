import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-xl font-semibold text-center my-6">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="bg-red-300 rounded p-3 text-black "
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="bg-red-300 rounded p-3"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-red-300 rounded p-3 text-black "
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="p-3 bg-green-400 rounded hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-4 mt-5">
        <p>Have an account ? </p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
      <p className="text-red-500">{error && "somthing went wrong"}</p>
    </div>
  );
}
