import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Banner from './components/Banner';
import WatchList from './components/WatchList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  function addToWatchlist(movieObj){
    setWatchlist([...watchlist, movieObj]);
    console.log(watchlist)
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<> <Banner/> <Movies setMovies={setMovies} movies={movies} addToWatchlist={addToWatchlist} watchlist={watchlist}/></>} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
