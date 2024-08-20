import React, { useEffect, useState } from "react";
import WatchListTable from "./WatchListTable.jsx";
import genres from "../utilities/genres.js";


function WatchList({ watchlist, setWatchlist, removeFromWatchlist }) {
  const [searchVal, setSearchInput] = useState("");
  const [genreList, setGenres] = useState([]);
  //used for genre based filter
  const [currGenre, setCurrGenre] = useState("All movies");
  function handleSearch(e) {
    setSearchInput(e.target.value);
  }

  useEffect(() => {
    let newGenreList = ["All movies"];
    for (let movie of watchlist) {
      let genreName = genres[movie.genre_ids[0]];
      if (newGenreList.indexOf(genreName) < 0) {
        newGenreList.push(genreName);
      }
    }
    setGenres([...newGenreList]);
  }, [watchlist]);
  function setFilterByGenre(e) {
    setCurrGenre(e.target.innerText);
  }
  return (
    <div id="watchlist">
      <div className="flex justify-center items-center flex-col p-4 ">
        <div className="flex justify-center items-center flex-wrap">
          {genreList.map((genre) => {
            if (genre == currGenre) {
              return (
                <button
                  className="px-4 p-2 m-2 bg-blue-400 rounded text-white "
                  key={genre}
                >
                  {genre}
                </button>
              );
            } else {
              return (
                <button
                  className="px-4 p-2 m-2 bg-gray-200 rounded text-gray-600 "
                  key={genre}
                  onClick={setFilterByGenre}
                >
                  {genre}
                </button>
              );
            }
          })}
        </div>
        <input
          type="text"
          placeholder="Search for movies"
          className="bg-gray-100 my-4 p-3 max-w-[350px] w-full rounded-xl outline-none"
          value={searchVal}
          onChange={handleSearch}
        />
      </div>

      {watchlist.length == 0 ? (
        <div className="min-h-[300px] flex justify-center items-center"><h1 className="text-center font-bold text-[1.5rem] p-4 mt-5 text-gray-400"><i className="fa fa-xmark"></i> There is nothing in the watchlist</h1></div>
      ) : (
        <WatchListTable
          watchlist={watchlist}
          setWatchlist={setWatchlist}
          currGenre={currGenre}
          removeFromWatchlist={removeFromWatchlist}
          searchVal={searchVal}
        />
      )}
    </div>
  );
}

export default WatchList;
