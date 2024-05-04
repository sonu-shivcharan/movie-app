import React, { useState } from "react";

function WatchList({ watchlist, setWatchlist }) {
  const [searchVal, setSearchInput] = useState("");
  
  function sortDescending(){
    let sorted = watchlist.sort((a, b)=>b.vote_average-a.vote_average);
    setWatchlist([...sorted]);
  }
  function sortAscending(){
    let sorted = watchlist.sort((a, b)=>a.vote_average-b.vote_average);
    setWatchlist([...sorted]);
  }
  function handleSearch(e){
    setSearchInput(e.target.value);
  }
  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search for movies"
          className="bg-gray-100 my-4 p-3 max-w-[350px] w-full rounded-xl outline-none"
          value={searchVal}
          onChange={handleSearch} 
        />
      </div>
      <div className="p-4">
        <table className="w-full">
          <thead className="">
            <tr className="bg-blue-100 p-4 h-[3rem]">
              <th>Name</th>
              <th>
                <div className="flex items-center justify-centers">
                <div onClick={sortAscending} className="p-2"><i className="fa-solid fa-arrow-down"></i></div>
                <div className="px-2">Rating</div>
                <div onClick={sortDescending} className="p-2"><i className="fa-solid fa-arrow-up"></i></div>
                </div>
                </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movie)=>{
              return movie.title.toLowerCase().includes(searchVal.toLocaleLowerCase())
            }).map((movie) => {
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
                  <td>Action</td>
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
