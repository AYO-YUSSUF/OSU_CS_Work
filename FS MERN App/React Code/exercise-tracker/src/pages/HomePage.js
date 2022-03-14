import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setExerciseToEdit }) {
    const history = useHistory();
    const [exercises, setExercises] = useState([]);

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const exercises = await response.json();
        setExercises(exercises);
    }
        
    useEffect(() => {
        loadExercises();
    }, []);

    const onEdit = async exerciseToEdit => {
        setExerciseToEdit(exerciseToEdit);
        history.push("/edit-exercise");
    }

    const onDelete = async id => {

        const response = await fetch(`/exercises/${id}`, { method: 'DELETE' });

        if (response.status === 204) {
            const getResponse = await fetch('/exercises');
            const exercises = await getResponse.json();
            setExercises(exercises);
        } else {
            console.error(`Failed to delete exercise with id = ${id}, status code = ${response.status}`)
        }   

    }	

    return (
        <>
            <h2>List of Exercises</h2>
            <ExerciseList exercises={exercises} 
                    onDelete={onDelete}
                    onEdit={onEdit}>
            </ExerciseList>
            <Link to="/add-exercise" className='AddEx'>Add an exercise</Link>
        </>
    );
}

export default HomePage;