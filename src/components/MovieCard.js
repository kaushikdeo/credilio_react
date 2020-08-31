import React from 'react'

const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
            <div className="movie-content">
                <div className="movie-content-header">
                    <a href="#">
                        <h3 className="movie-title">{movie.name}</h3>
                    </a>
                    <div className="imax-logo"></div>
                </div>
                <div className="movie-info">
                    <div className="info-section">
                        <label>genre</label>
                        <span>{movie.genre.toString()}</span>
                    </div>
                    <div className="info-section">
                        <label>IMDB</label>
                        <span>{movie.imdbRating}</span>
                    </div>
                    <div className="info-section">
                        <label>PG Rating</label>
                        <span>{movie.pgRating}</span>
                    </div>
                    <div className="info-section">
                        <label>duration</label>
                        <span>{movie.duration}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MovieCard;
