import React, { useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import axios from "axios"
function Movies({setMovies, movies, addToWatchlist, removeFromWatchlist, watchlist}) {
  
  const [currPage, setPage] = useState(1);
  function handleNextPage(){
    setPage(currPage+1);
  }
  function handlePrevPage(){
    if(currPage!=1){
      setPage(currPage-1);
    }
  }
  const BASE_URL  = 'https://api.themoviedb.org/3/movie/popular';
  useEffect(()=>{
  let url = `${BASE_URL}?api_key=d6e8ad6d384eaa09dd0f20f160a5db36&language=en-US&page=${currPage}`
      axios.get(url)
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
      movies.map((movie)=><MovieCard movieObj={movie} addToWatchlist={addToWatchlist} removeFromWatchlist={removeFromWatchlist} watchlist={watchlist} key={movie.title}/>)
     }
      </div>
      <Pagination currPage={currPage} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage}/>
    </div>
  );
}

export default Movies;
