import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Header() {
  const [activeButton, setActiveButton] = useState("");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-gray-400 ">
      <div className="flex justify-between max-w-6xl mx-auto items-center p-4">
        {/* <Link to="/">
          <h1>Auth App</h1>
        </Link> */}
        <Link
          to="/"
          className={activeButton === "auth" ? "text-white" : ""}
          onClick={() => handleButtonClick("auth")}
        >
          Auth App
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link
              to="/"
              className={activeButton === "home" ? " text-white" : ""}
              onClick={() => handleButtonClick("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={activeButton === "about" ? " text-white" : ""}
              onClick={() => handleButtonClick("about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={activeButton === "profile" ? " text-white" : ""}
              onClick={() => handleButtonClick("profile")}
            >
              {currentUser ? (
                <img
                  src={currentUser.profilePicture}
                  alt="profile"
                  className="h-7 w-7 rounded-full object-cover"
                />
              ) : (
                "Sign In"
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
