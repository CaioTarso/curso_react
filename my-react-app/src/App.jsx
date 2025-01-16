import { useState, useEffect} from 'react'
import MovieCard from './MovieCard'
import './App.css'
import searchicon from './search.svg'

// 7a226c6f

const API_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = import.meta.env.VITE_API_KEY;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}?query=${title}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${API_KEY}`, // Certifique-se de usar crase aqui
          'Content-Type': 'application/json',
        },
      });
      
      const data = await response.json();

      // TMDB retorna resultados na propriedade "results"
      setMovies(data.results || []);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  };

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
