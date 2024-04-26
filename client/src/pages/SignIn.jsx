import React, { useState } from "react";

export default function SignIn() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
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
        <button className="p-3 bg-red-400">Sign In</button>
      </form>
    </div>
  );
}
