import React from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../components/MovieList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
    const [movies, setMovies] = useState([]);

    return (
        <>
            <h2>List of Movies</h2>
            <MovieList movies={movies}></MovieList>
            <Link to="/add-movie">Add a movie</Link>
        </>
    );
}

export default HomePage;