import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Search from './components/Search';
import MovieCard from './components/MovieCard';
import MovieDescription from './components/MovieDescription';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(10);
    const [totalMovies, setTotalMovies] = useState(0);
    const [searchText, setSearchText] = useState(0);

    useEffect(() => {
        const fetchMovies = async () => {
            genericSearch('http://localhost:5000/api/movies?page=1&limit=10&orderBy=-1');
        };
        fetchMovies();
    }, []);

    const genericSearch = async (url) => {
        const movies = await axios.get(url);
        setMovies(movies.data.allMovies);
        setCurrentPage(movies.data.currentPage);
        setMoviesPerPage(movies.data.moviesPerPage);
        setTotalMovies(movies.data.totalMovies);
        setLoading(false);
    }

    const handleSetSearchText = (searchText) => {
        console.log('searchText', searchText);
        setSearchText(searchText);
    }

    const handleFilterSearch = (e) => {
        console.log('I am here');
        e.preventDefault();
        genericSearch(`http://localhost:5000/api/movies?orderBy=-1&filter=${searchText}`);
    }

    const handleChangePage = async (e, pageNumber) => {
        e.preventDefault();
        genericSearch(`http://localhost:5000/api/movies?page=${pageNumber}&limit=10&orderBy=-1`);
    }

    const renderMovies = () => {
        return movies.map((movie, i) => {
            return (
                <div style={{display: "flex"}} key={i}>
                    <MovieCard movie={movie}/>
                    <MovieDescription movie={movie} />
                </div>
            )
        })
    }
  return (
    <div className="App">
        <header>
            <h1>Movies List</h1>
        </header>
        <main>
            <Search handleSetSearchText={handleSetSearchText} handleFilterSearch={handleFilterSearch}/>
            {renderMovies()}
            <Pagination moviesPerPage={moviesPerPage} totalMovies={totalMovies} handleChangePage={handleChangePage} />
        </main>
    </div>
  );
}

export default App;
