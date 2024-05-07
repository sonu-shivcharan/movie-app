import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="border flex items-center">
      <div>
        <img src={Logo} className="w-9 mx-3" />
      </div>
      <Link
        to="/"
        className="p-2 px-3 font-bold text-blue-400 border-2 border-transparent rounded hover:border-blue-400 transition duration-150 ease-in-out"
      >
        Home
      </Link>
      <Link
        to="/watchlist"
        className="p-2 px-3 font-bold text-blue-400 border-2 border-transparent rounded hover:border-blue-400 transition duration-150 ease-in-out"
      >
        WatchList
      </Link>
    </div>
  );
}

export default Navbar;
