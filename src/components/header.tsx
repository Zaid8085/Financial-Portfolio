import React from "react";
import { useNavigate } from "react-router-dom";
import { Logos } from "./logos";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("isAuthenticated", "false");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    navigate("/login");
  };
  return (
    <header className="w-full h-[64px] lg:h-80px flex items-center justify-between bg-white drop-shadow-lg">
      <div className="w-[30%]">
        <Logos type="headerLogo" bg="dark" />
      </div>
      <h1 className="h-1">Dashboard</h1>
      <div className="mr-2 w-[30%] flex justify-end">
        <button
          className="logout-btn"
          onClick={handleClick}
          type="submit"
          onSubmit={handleClick}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default React.memo(Header);
