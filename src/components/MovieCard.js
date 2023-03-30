import React from 'react';

const MovieCard = ({ movie }) => {
  const posterSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`
    : 'https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/file.jpg'; 
    // Placeholder for filmer uten poster hentet fra https://www.usgs.gov/media/images/standard-filedocument-thumbnail-placeholder

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.release_date}</p>
      <img src={posterSrc} alt={movie.title} />
    </div>
  );
};

export default MovieCard;