import React from 'react';
import MovieCard from './MovieCard';

const MovieCards = ({ movies }) => {
  return (
    <div className="movie-cards">
      {movies.slice(0, 10).map((movie) => (
        <div className="movie-card" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieCards;