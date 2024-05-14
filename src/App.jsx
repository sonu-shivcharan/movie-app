import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Banner from "./components/Banner";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [bannerDetails, setBannerDetails]=useState({title:"", backdropPath:""});
  const [watchlist, setWatchlist] = useState([]);
  useEffect(() => {
    let itemsFromLocalStore = localStorage.getItem("movieApp");
    if (!itemsFromLocalStore) {
      return;
    }
    setWatchlist(JSON.parse(itemsFromLocalStore));
  }, []);
  function addToWatchlist(movieObj) {
    let newWatchlist = [...watchlist, movieObj];
    setWatchlist(newWatchlist);
    localStorage.setItem("movieApp", JSON.stringify(newWatchlist));
  }
  function removeFromWatchlist(movieObj) {
    let newWatchlist = watchlist.filter((movie) => movie.id != movieObj.id);
    localStorage.setItem("movieApp", JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Banner moviesObj={movies} bannerDetails={bannerDetails}/>{" "}
              <Movies
                setMovies={setMovies}
                movies={movies}
                addToWatchlist={addToWatchlist}
                removeFromWatchlist={removeFromWatchlist}
                watchlist={watchlist}
                setBannerDetails={setBannerDetails}
              />
            </>
          }
        />
        <Route
          path="/watchlist"
          element={
            <WatchList watchlist={watchlist} setWatchlist={setWatchlist} removeFromWatchlist={removeFromWatchlist} />
          }
        />
      </Routes>
      <div id="footer" className="min-h-[200px] mt-4 flex justify-center items-center">
        <h2>Powered BY TMDB </h2>

      </div>
          </BrowserRouter>
  );
}

export default App;
