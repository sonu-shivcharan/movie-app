import React, { useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import axios from "axios"
function Movies() {
  const [movies, setMovies] = useState([]);
  const apiKey = process.env.VITE_APP;
  console.log(apiKey);
  useEffect(()=>{
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        headers: {
          accept: "application/json",
          Authorization: apiKey,
        },
      };
      axios
        .request(options)
        .then(function (response) {
          
          console.log(response.data.results[0]);
          setMovies(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
  }, [])
  return (
    <div>
        <h2 className="font-bold text-center text-xl my-6">Trending</h2>
      <div className="flex flex-wrap justify-center gap-10">
     {
      movies.map((movie)=><MovieCard title={movie.title} posterPath={movie.poster_path} key={movie.title}/>)
     }
      </div>
    </div>
  );
}

export default Movies;
