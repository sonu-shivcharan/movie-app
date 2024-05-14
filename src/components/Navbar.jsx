import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
function Navbar() {
  const setPage=(e)=>console.log(e.target);
  return (
    <div className="border flex items-center w-full bg-white p-2 fixed top-0 left-0 z-10">
      <div>
        <img src={Logo} className="w-9 mx-3" />
      </div>
      <Link
        to="/"
        className="p-2 px-3 font-bold text-blue-400 border-2 border-transparent rounded hover:border-blue-400 transition duration-150 ease-in-out"
      onClick={setPage}>
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
