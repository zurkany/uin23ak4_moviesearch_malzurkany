import React, { useState, useEffect } from 'react';
import MovieCards from './MovieCards';

const SearchResults = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=6b0cff6a7e4476cc942de75007784746&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const displayJamesBondMovies = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=6b0cff6a7e4476cc942de75007784746&language=en-US&query=James%20Bond&page=1&include_adult=false`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        console.error(err);
      }
    };

    displayJamesBondMovies();
  }, []);

  return (
    <div>
      <form onSubmit={searchMovies}>
        <input
          type='text'
          placeholder='Search for a movie'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      <MovieCards movies={movies} />
    </div>
  );
};

export default SearchResults;