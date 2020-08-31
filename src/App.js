import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(10);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            const movies = await axios.get('http://localhost:5000/api/movies?page=1&limit=10&orderBy=1&filter=s');
            setMovies(movies.data.allMovies);
            setLoading(false);
        };
        fetchMovies();
    }, [])
    console.log('movies', movies);
    const renderMovies = () => {
        return movies.map(movie => {
            return (
                <div>
                    <h3>{movie.name}</h3>
                </div>
            )
        })
    }
  return (
    <div className="App">
        <header>
            <h1>Movies List</h1>
        </header>
    </div>
  );
}

export default App;
