// Importing required modules and components
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./components/Cards";
import MovieModal from "./components/Modal";
import NavBar from "./components/common/NavBar";

const App = () => {
  // State variables
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  // API key for OMDB API, fetched from environment variables
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  // Fetch popular movies when the component mounts
  useEffect(() => {
    fetchMovies("popular");
  }, []);

  // Function to fetch movies based on a query
  const fetchMovies = async (query) => {
    const endpoint =
      query === "popular"
        ? `https://www.omdbapi.com/?s=batman&apikey=${API_KEY}`
        : `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;

    try {
      const response = await axios.get(endpoint);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  // Function to handle search button click
  const handleSearch = () => {
    if (searchQuery.trim()) fetchMovies(searchQuery);
  };

  // Function to fetch detailed information for a specific movie
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
      {/* Navbar component for the search functionality */}
      <NavBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />

      {/* Movie list section */}
      <div className="movie-list grid gap-5 max-w-[1440px] mx-auto px-3">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={() => fetchMovieDetails(movie.imdbID)}
          />
        ))}
      </div>

      {/* Modal to display selected movie details */}
      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  );
};

export default App;
