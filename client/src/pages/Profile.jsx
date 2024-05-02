import React from "react";
import { useSelector } from "react-redux";
export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h2 className="font-semibold text-3xl items-center my-7 text-center">
        Profile
      </h2>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.profilePicture}
          alt=""
          className="w-24 h-24 self-center rounded-full object-cover hover:cursor-pointer"
        ></img>
        <input
          type="text"
          placeholder="username"
          id="username"
          defaultValue={currentUser.username}
          className="  bg-slate-100 rounded p-3 text-black"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          defaultValue={currentUser.email}
          className="  bg-slate-100 rounded p-3 text-black"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="  bg-slate-100 rounded p-3 text-black"
        />
        <button className="p-3 bg-gray-500 rounded-lg hover:opacity-95 disabled:opacity-80 uppercase">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-4">
        <span className="text-red-600 cursor-pointer">Delete account</span>
        <span className="text-red-600 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
