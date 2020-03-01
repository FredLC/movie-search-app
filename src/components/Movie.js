import React from 'react';

const DEFAULT_PLACEHOLDER_IMAGE =
  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          src={'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster}
          alt={movie.Title}
        />
      </div>
      <p>{movie.Year}</p>
    </div>
  );
};

export default Movie;
