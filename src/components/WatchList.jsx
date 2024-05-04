import React from "react";

function WatchList({watchlist}) {
  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search for movies"
          className="bg-gray-100 my-4 p-3 max-w-[350px] w-full rounded-xl outline-none"
        />
      </div>
      <div className="p-4">
        <table className="w-full">
          <thead className="bg-blue-400/30 text-blue-900 p-4 border-b-[3px] ">
            <tr className="py-[1rem]">
              <th>Name</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {
              watchlist.map((movie)=>{
                return (
                <tr className="text-center border-b-[3px]" key={movie.id}>
              <td className="flex items-center ">
                <img className="w-[150px] p-2" src={`https://images.tmdb.org/t/p/original/${movie.poster_path}`}></img>
                <div className="mx-4 font-bold">{movie.title}</div>
              </td>
              <td>{movie.vote_average.toFixed(2)}</td>
              <td>{movie.popularity}</td>
              <td>Action</td>
            </tr>
                )
              })

            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WatchList;
