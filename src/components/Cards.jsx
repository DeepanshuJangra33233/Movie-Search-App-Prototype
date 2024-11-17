import React from "react";

const MovieCard = ({ movie, onClick }) => {
  return (
    <div
      onClick={() => onClick(movie)}
      className="cursor-pointer flex flex-col justify-center sm:justify-start "
    >
      <img className="rounded-t-xl" src={movie.Poster} alt="banner" />
      <p className="text-sm mt-3 mb-2">
        <span className="bg-[#3f65e5] rounded-md py-1 px-2">Type</span>{" "}
        {movie.Type}
      </p>
      <div className="flex items-center justify-between mb-2">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
      <span>
        <span className="text-white bg-yellow-400 rounded-md py-1 px-2">
          IMDB ID
        </span>{" "}
        {movie.imdbID}
      </span>
    </div>
  );
};

export default MovieCard;
