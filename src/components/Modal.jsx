import React from "react";
import { Cross } from "./common/Icons";
const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
      <span
        onClick={onClose}
        className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-10 bg-[rgba(0,_0,_0,_0.6)]"
      ></span>
      <div className="modal-bg max-w-[500px] rounded-lg border border-white p-4 relative z-30">
        <button onClick={onClose} className="absolute top-2 right-2">
          <Cross />
        </button>
        <h2>{movie.Title}</h2>
        <p>
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p>
          <strong>Plot:</strong> {movie.Plot}
        </p>
        <p>
          <strong>Rating:</strong> {movie.imdbRating}
        </p>
      </div>
    </div>
  );
};

export default MovieModal;
