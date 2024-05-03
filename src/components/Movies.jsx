import React, { useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import axios from "axios"
function Movies({setMovies, movies, addToWatchlist, watchlist}) {
  
  const [currPage, setPage] = useState(1);
  function handleNextPage(){
    setPage(currPage+1);
  }
  function handlePrevPage(){
    if(currPage!=1){
      setPage(currPage-1);
    }
  }
  const apiKey = process.env.VITE_APP;
  useEffect(()=>{
    console.log("useEffect runniong");
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currPage}`,
        headers: {
          accept: "application/json",
          Authorization: apiKey,
        },
      };
      axios
        .request(options)
        .then(function (response){
          console.log(response.data);
          setMovies(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
        
  }, [currPage])
  return (
    <div>
        <h2 className="font-bold text-center text-xl my-6">Trending</h2>
      <div className="flex flex-wrap justify-center gap-10">
     {
      movies.map((movie)=><MovieCard movieObj={movie} addToWatchlist={addToWatchlist} watchlist={watchlist} key={movie.title}/>)
     }
      </div>
      <Pagination currPage={currPage} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage}/>
    </div>
  );
}

export default Movies;
