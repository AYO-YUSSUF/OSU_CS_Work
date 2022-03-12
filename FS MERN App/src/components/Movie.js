import React from 'react';

function Movie({ movie }) {
    return (
        <tr>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td>{movie.language}</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>
    );
}

export default Movie;