import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Banner from './components/Banner';
import WatchList from './components/WatchList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  useEffect(()=>{
    let itemsFromLocalStore = localStorage.getItem("movieApp");
    if(!itemsFromLocalStore){
      return;
    }
    setWatchlist(JSON.parse(itemsFromLocalStore));
  }, [])
  function addToWatchlist(movieObj){
    let newWatchlist =[...watchlist, movieObj]
    setWatchlist(newWatchlist);
    localStorage.setItem("movieApp", JSON.stringify(newWatchlist));
    console.log(newWatchlist);
  }
  function removeFromWatchlist(movieObj){
    let newWatchlist = watchlist.filter((movie)=>movie.id!=movieObj.id);
    setWatchlist(newWatchlist);
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<> <Banner/> <Movies setMovies={setMovies} movies={movies} addToWatchlist={addToWatchlist} removeFromWatchlist={removeFromWatchlist} watchlist={watchlist}/></>} />
        <Route path="/watchlist" element={<WatchList watchlist={watchlist} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
