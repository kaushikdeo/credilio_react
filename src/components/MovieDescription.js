import React from 'react';

const MovieDescription = ({movie}) => {
    return (
        <div className="movie-description">
            <p className="movie-title">{movie.description}</p>
        </div>
    );
}

export default MovieDescription;
