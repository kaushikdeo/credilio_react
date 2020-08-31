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
    const [searchText, setSearchText] = useState("");
    const [searchSlots, setSearchSlots] = useState({
        searchByName: 1,
        searchByDescription: 0,
    });
    const [orderSlots, setOrderSlots] = useState({
        orderByDuration: 0,
        orderByImdbRating: 1,
        orderByPgRating: 0,
    });

    useEffect(() => {
        const fetchMovies = async () => {
            setCurrentPage(1);
            genericSearch();
        };
        fetchMovies();
    }, []);

    useEffect(() => {
            genericSearch();
      }, [currentPage]);

    const genericSearch = async () => {
        const sortBy = orderSlots.orderByDuration === 1 ? 'duration' : (orderSlots.orderByImdbRating === 1 ? 'imdbRating' : 'pgRating' );
        const fetchUrl = `http://localhost:5000/api/movies?page=${currentPage}&&filter=${searchText}&limit=10&orderBy=-1&filterByDescription=${searchSlots.searchByDescription}&sortBy=${sortBy}`
        const movies = await axios.get(fetchUrl);
        setMovies(movies.data.allMovies);
        setMoviesPerPage(movies.data.moviesPerPage);
        setTotalMovies(movies.data.totalMovies);
        setLoading(false);
    }

    const handleSetSearchText = (searchText) => {
        setSearchText(searchText);
    }

    const handleFilterSearch = (e) => {
        e.preventDefault();
        setCurrentPage(1);
        genericSearch();
    }

    const handleChangePage = async (e, pageNumber) => {
        e.preventDefault();
        setCurrentPage(pageNumber);
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

    const handleFilterBy = (filterBy) => {
        let searchSlotsState = searchSlots;
        searchSlotsState[filterBy] = searchSlotsState[filterBy] === 0 ? 1 : 0 ;
        setSearchSlots({...searchSlotsState});
    }

    const handleOrderBy = (orderBy) => {
        const resetObject = {
            orderByDuration: 0,
            orderByImdbRating: 0,
            orderByPgRating: 0,
        };
        resetObject[orderBy] = 1;
        setOrderSlots({...resetObject});
    }

  return (
    <div className="App">
        <header>
            <h1 style={{color: "black"}}>Movies List</h1>
        </header>
        <main>
            <Search 
                handleSetSearchText={handleSetSearchText} 
                handleFilterSearch={handleFilterSearch} 
                searchSlots={searchSlots}
                orderSlots={orderSlots}
                handleFilterBy={handleFilterBy} 
                handleOrderBy={handleOrderBy} 
            />
            {renderMovies()}
            <Pagination 
                moviesPerPage={moviesPerPage} 
                totalMovies={totalMovies} 
                handleChangePage={handleChangePage} 
            />
        </main>
    </div>
  );
}

export default App;
