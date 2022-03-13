import React from 'react';
import { FiDelete, FiEdit } from 'react-icons/fi'

function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><FiEdit onClick={() => onEdit(exercise)} class="pointer" /></td>
            <td><FiDelete onClick={() => onDelete(exercise._id)} class="pointer" /></td>
        </tr>
    );
}

export default Exercise;