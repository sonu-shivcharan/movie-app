import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="border flex items-center p-3">
      <div>
        <img src={Logo} className="w-9" />
      </div>
      <Link
        to="/"
        className="mx-2 px-2 font-bold text-blue-400 rounded hover:bg-blue-400 hover:text-white transition duration-150 ease-in-out"
      >
        Home
      </Link>
      <Link
        to="/watchlist"
        className="mx-2 px-2 font-bold text-blue-400 rounded hover:bg-blue-400 hover:text-white transition duration-150 ease-in-out"
      >
        WatchList
      </Link>
    </div>
  );
}

export default Navbar;
