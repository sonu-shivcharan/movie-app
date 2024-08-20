import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import axios from "axios";
function Movies({
  setMovies,
  movies,
  addToWatchlist,
  removeFromWatchlist,
  watchlist,
  setBannerDetails,
}) {
  const [currPage, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  function handleNextPage() {
    const bannerHeight = document.getElementById("banner").clientHeight;
    document.documentElement.scrollTop = bannerHeight;
    setPage(currPage + 1);
  }
  function handlePrevPage() {
    if (currPage != 1) {
      const bannerHeight = document.getElementById("banner").clientHeight;
      document.documentElement.scrollTop = bannerHeight;
      setPage(currPage - 1);
    }
  }
  const BASE_URL = "https://api.themoviedb.org/3";
  useEffect(() => {
    let url = `${BASE_URL}/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${currPage}`;
    axios
      .get(url)
      .then(function (response) {
        let results = response.data.results;
        console.log("data successfully fetched");
        setMovies(results);
        const randomIdx = Math.floor(Math.random() * results.length);
        console.log(randomIdx);
        setBannerDetails({
          title: results[randomIdx].title,
          backdropPath: results[randomIdx].backdrop_path,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [currPage]);
  function searchMovie() {
    if(!searchQuery) return;
    const query = encodeURIComponent(searchQuery);
    const options = {
      method: 'GET',
      url: `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=${currPage}`,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_KEY}`
      }
    };
    axios
      .request(options)
      .then(function (response) {
        let result = response.data.results;
        console.log(result);
        setMovies(result);
      })
      .catch(function (error) {
        console.error(error);
      });
      
  }
  return (
    <div id="#movies-container">
      <div className="flex justify-center my-6">
        <div
          id="searcBarContainer"
          className="sticky mx-3 top-0 flex bg-gray-100 max-w-[350px] w-full rounded-xl"
        >
          <input
            type="text"
            placeholder="Search for movies"
            className="bg-gray-100 w-full rounded-xl p-3 px-5 outline-none"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <img
            className="w-[50px] px-2 rounded-xl bg-blue-400 shadow hover:scale-95 duration-200 hover:bg-blue-500"
            src="./search.svg"
            alt=""
            onClick={searchMovie}
          />
        </div>
      </div>
      <h2 className="font-bold text-center text-3xl my-6">Trending</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {movies.map((movie) => (
          <MovieCard
            movieObj={movie}
            addToWatchlist={addToWatchlist}
            removeFromWatchlist={removeFromWatchlist}
            watchlist={watchlist}
            key={movie.title}
          />
        ))}
      </div>
      <Pagination
        currPage={currPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
}

export default Movies;
