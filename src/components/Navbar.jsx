import React from "react";
import Logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHomeActive = location.pathname === "/";
  console.log(location);

  return (
    <div className="border flex items-center w-full bg-white p-2 fixed top-0 left-0 z-10">
      <div>
        <img src={Logo} className="w-9 mx-3" />
      </div>
      <Link
        to="/"
        id="home-btn"
        className={`p-2 px-3 mx-2 font-bold border-2 border-transparent rounded hover:border-blue-400 transition duration-150 ease-in-out ${
          isHomeActive ? "bg-blue-400 text-white" : "text-blue-400"
        }`}
      >
        Home
      </Link>
      <Link
        id="watchlist-btn"
        to="/watchlist"
        className={`p-2 mx-2 px-3 font-bold  border-2 border-transparent rounded hover:border-blue-400 transition duration-150 ease-in-out
        ${!isHomeActive?"bg-blue-400 text-white" : "text-blue-400"}
        `}
      >
        WatchList
      </Link>
    </div>
  );
}

export default Navbar;
