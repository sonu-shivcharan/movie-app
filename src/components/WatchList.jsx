import React, { useEffect, useState } from "react";
import genres from "../utilities/genres.js";

function WatchList({ watchlist, setWatchlist, removeFromWatchlist }) {
  const [searchVal, setSearchInput] = useState("");
  const [genreList, setGenres] = useState([]);
  //used for genre based filter
  const [currGenre, setCurrGenre] = useState("All movies");

  function sortDescending() {
    let sorted = watchlist.sort((a, b) => b.vote_average - a.vote_average);
    setWatchlist([...sorted]);
  }
  function sortAscending() {
    let sorted = watchlist.sort((a, b) => a.vote_average - b.vote_average);
    setWatchlist([...sorted]);
  }
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
      <div className="flex justify-center items-center flex-col p-4">
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
      <div className="p-4 table-container">
        <table className=" w-full">
          <thead className="bg-blue-100">
            <tr className=" p-4 h-[3rem]">
              <th>Name</th>
              <th>
                <div className="flex items-center justify-center">
                  <div onClick={sortAscending} className="p-2">
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                  <div className="px-2">Rating</div>
                  <div onClick={sortDescending} className="p-2">
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movie) => {
                if (currGenre != "All movies") {
                  return (
                    movie.title
                      .toLowerCase()
                      .includes(searchVal.toLocaleLowerCase()) &&
                    genres[movie.genre_ids[0]] == currGenre
                  );
                } else {
                  return movie.title
                    .toLowerCase()
                    .includes(searchVal.toLocaleLowerCase());
                }
              })
              .map((movie) => {
                return (
                  <tr className="text-center border-b-[3px]" key={movie.id}>
                    <td className="flex items-center ">
                      <img
                        className="w-[150px] p-2"
                        src={`https://images.tmdb.org/t/p/original/${movie.poster_path}`}
                      ></img>
                      <div className="mx-4 font-bold">{movie.title}</div>
                    </td>
                    <td>{movie.vote_average.toFixed(2)}</td>
                    <td>{movie.popularity}</td>
                    <td>{genres[movie.genre_ids[0]]}</td>
                    <td>
                      <button
                        className="border-[1px] border-red-500 rounded p-2 text-red-600 font-bold shadow-red-700 hover:shadow-xl transition duration-300"
                        onClick={()=>removeFromWatchlist(movie)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WatchList;
