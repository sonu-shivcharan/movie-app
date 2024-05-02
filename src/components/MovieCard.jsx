import React from "react";

function MovieCard({ title, posterPath}) {
  return (
    <div
      className="bg-cover bg-center rounded-[20px] overflow-hidden relative hover:scale-105 duration-100"
      style={{
        backgroundImage:
          `url(https://images.tmdb.org/t/p/original/${posterPath})`,
        width: "200px",
        height: "350px",
      }}
    >
      <div className="gradient-bg p-2 text-center font-bold py-4 w-full">
        {title}
      </div>
    </div>
  );
}

export default MovieCard;
