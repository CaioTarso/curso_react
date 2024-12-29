import { useState, useEffect} from 'react'
import MovieCard from './MovieCard'
import './App.css'
import searchicon from './search.svg'

// 7a226c6f

const API_URL = 'http://www.omdbapi.com/?apikey=7a226c6f'

const App = () =>   {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
   const response = await fetch(`${API_URL}&s=${title}`)
   const data = await response.json()

   setMovies(data.Search);
  }

  
  useEffect(() => {
    searchMovies('batman');
  }, []);

  return (
    <div className="App">
       <h1>NETFELIX</h1>

       <div className="search">
        <input 
           placeholder='Search for a movie'
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
          src={searchicon} 
          alt="search" 
          onClick={() => searchMovies(searchTerm)}
        />
       </div>

       {
          movies.length > 0 ? (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
           </div>
          ) : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )}
    </div>
  );
}

export default App
