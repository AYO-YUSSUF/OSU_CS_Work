import * as exercises from './exercises-model.mjs';
import express from 'express';
const app = express();
const PORT = 3000;

const router = express.Router();
app.use(express.json());

/**
 * Create a new exercise with the name, reps, weight, unit, and date provided in the body parameters
 */
app.post("/exercises", (req, res) => {
    console.log(req.body);
    exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
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
app.get("/exercises", (req, res) => {
    console.log(req.body);
    // Is there a body parameter named reps? If so add a filter based on its value.
    
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
 * the values provided in the body parameters
 */
app.put("/exercises/:id", (req, res) => {
    console.log(req.body);

    // Grabs the exercise ID from the URL passed into the function
    let requestSegments = req.path.split('/');
    
    exercises.replaceExercise(requestSegments[2], req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
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
 * Delete the exercise whose _id is provided in the body parameters
 */
app.delete("/exercises/_id", (req, res) => {
    console.log(req.body);
    exercises.deleteById(req.body._id)
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