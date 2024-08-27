import React from "react";

function MovieCard({
  movieObj,
  addToWatchlist,
  removeFromWatchlist,
  watchlist,
  displayMovieDetails
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
      className="movie-card bg-cover bg-center rounded-[20px] overflow-hidden relative hover:scale-105 duration-100 hover:shadow-xl"
      style={{
        backgroundImage: `url(https://images.tmdb.org/t/p/original/${movieObj.poster_path})`,
        width: "200px",
        height: "350px",
      }}
      onClick={(e)=>{
        const target = e.target.classList;
        if(target.contains("movie-card") || target.contains("gradient-bg")){
          displayMovieDetails(movieObj)
        }
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
        {movieObj.title} {movieObj.release_date.substr(0,4)}
      </div>
    </div>
  );
}

export default MovieCard;
