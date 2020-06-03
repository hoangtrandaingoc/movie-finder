import React, { useEffect, useState } from 'react';
import './App.scss';
import MenuTop from './components/MenuTop';
import Footer from './components/Footer';
import axios from 'axios'
import Movie from './components/Movie';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const url = "https://api.themoviedb.org/4/list/1?api_key=5dd50dcd383eb11b1fa40f4e563891b1"
    axios.get(url)
        .then(response => setMovies(response.data.results))
        console.log("data:", movies);
  }, []);
  
  return (
    <div className="App">
      <MenuTop/>
      <Movie movies={movies}/>
      <Footer/>
    </div>
  );
}

export default App;
