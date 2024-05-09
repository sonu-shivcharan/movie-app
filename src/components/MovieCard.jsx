import React from "react";

function MovieCard({
  movieObj,
  addToWatchlist,
  removeFromWatchlist,
  watchlist,
}) {
  function isContain(movie) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movie.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="movie-card bg-cover bg-center rounded-[20px] overflow-hidden relative hover:scale-105 duration-100"
      style={{
        backgroundImage: `url(https://images.tmdb.org/t/p/original/${movieObj.poster_path})`,
        width: "200px",
        height: "350px",
      }}
    >
      {isContain(movieObj) ? (
        <div
          onClick={() => removeFromWatchlist(movieObj)}
          className="absolute right-0 m-2 p-1 bg-gray-900/80 text-xl rounded"
        >
          &#10060;
        </div>
      ) : (
        <div
          className="absolute right-0 m-2 p-1 bg-gray-900/80 text-xl rounded"
          onClick={() => addToWatchlist(movieObj)}
        >
          &#128525;
        </div>
      )}

      <div className="gradient-bg p-2 text-center font-bold py-4 w-full">
        {movieObj.title}
      </div>
    </div>
  );
}

export default MovieCard;
