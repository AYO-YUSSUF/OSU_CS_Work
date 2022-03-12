import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditMoviePage = ({ movieToEdit }) => {
    const [title, setTitle] = useState(movieToEdit.title);
    const [year, setYear] = useState(movieToEdit.year);
    const [language, setLanguage] = useState(movieToEdit.language);

    let history = useHistory();

    const editMovie = async () => {
        const response = await fetch(`/movies/${movieToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ title: title, year: year, language: language }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
             alert("Successfully edited the movie!");
        } else {
             alert(`Failed to edit movie, status code = ${response.status}`);
        }     history.push("/");
    };

    return (
        <div>
            <h1>Edit Movie</h1>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)} />
            <input
                type="number"
                value={year}
                onChange={e => setYear(e.target.value)} />
            <input
                type="text"
                value={language}
                onChange={e => setLanguage(e.target.value)} />
            <button
                onClick={editMovie}
            >Save</button>
        </div>
    );
}

export default EditMoviePage;