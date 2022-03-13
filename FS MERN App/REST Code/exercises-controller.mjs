import * as exercises from './exercises-model.mjs';
import express from 'express';
const app = express();

const PORT = 3000;

/**
 * Create a new exercise with the name, reps, weight, unit, and date provided in the query parameters
 */
app.get("/create", (req, res) => {
    console.log(req.query);
    exercises.createExercise(req.query.name, req.query.reps, req.query.weight, req.query.unit, req.query.date)
        .then(exercise => {
            res.send(exercise);
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });
});

/**
 * Retrive exercises
 */
app.get("/retrieve", (req, res) => {
    console.log(req.query);
    // Is there a query parameter named reps? If so add a filter based on its value.
    
    exercises.findExercises({}, '', 0)
        .then(exercises => {
            console.log(exercises)
            res.send(exercises);
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });

});

/**
 * Update the exercise whose _id is provided and set its name, reps, weight, unit, and date to
 * the values provided in the query parameters
 */
app.get("/update", (req, res) => {
    console.log(req.query);
    exercises.replaceExercise(req.query._id, req.query.name, req.query.reps, req.query.weight, req.query.unit, req.query.date)
        .then(updateCount => {
            console.log(updateCount);
            res.send({ updateCount: updateCount });
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });
});

/**
 * Delete the exercise whose _id is provided in the query parameters
 */
app.get("/delete", (req, res) => {
    console.log(req.query);
    exercises.deleteById(req.query._id)
        .then(deletedCount => {
            console.log(deletedCount);
            res.send({ deletedCount: deletedCount });
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});