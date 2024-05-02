import React, { useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import axios from "axios"
function Movies() {
  const [movies, setMovies] = useState([]);
  
  useEffect(()=>{
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmU4YWQ2ZDM4NGVhYTA5ZGQwZjIwZjE2MGE1ZGIzNiIsInN1YiI6IjY2MzMzYWRiYWQ1OWI1MDEyYjZkMzQ0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LcISIURxDtXpN9hn4mI0L4_FNjh3r-QUbR-bFLt-5fU",
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
