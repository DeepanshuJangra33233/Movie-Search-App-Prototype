import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./components/Cards";
import MovieModal from "./components/Modal";
import NavBar from "./components/common/NavBar";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const API_KEY = "5513295d";

  // Fetch popular movies (default view)
  useEffect(() => {
    fetchMovies("popular");
  }, []);

  const fetchMovies = async (query) => {
    const endpoint =
      query === "popular"
        ? `https://www.omdbapi.com/?s=batman&apikey=${API_KEY}` // Replace with a popular movies query
        : `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;

    try {
      const response = await axios.get(endpoint);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) fetchMovies(searchQuery);
  };

  const fetchMovieDetails = async (id) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
      );
      setSelectedMovie(response.data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  return (
    <div className="pb-5">
      <NavBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />

      <div className="movie-list max-w-[1440px] mx-auto px-3">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={() => fetchMovieDetails(movie.imdbID)}
          />
        ))}
      </div>
      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  );
};

export default App;
