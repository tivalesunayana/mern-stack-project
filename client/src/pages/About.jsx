import React from "react";

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto  p-8 rounded ">
        <h1 className="text-3xl font-bold mb-4">Hi, I'm Sunayana</h1>
        <p className="mb-6">
          I'm a MERN stack developer. This website features authentication and
          includes:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Sign in</li>
          <li>Sign up</li>
          <li>Profile update</li>
          <li>Sign out</li>
          <li>Redux toolkit</li>
          <li>Firebase integration, including Google sign-in</li>
        </ul>
        <p>Technologies used:</p>
        <ul className="list-disc list-inside mb-4">
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>MongoDB</li>
          <li>Node.js</li>
          <li>Firebase</li>
          <li>Redux</li>
        </ul>
        <p className="text-gray-500">Let's build something amazing together!</p>
      </div>
    </div>
  );
}
