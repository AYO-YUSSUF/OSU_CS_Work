import * as movies from './movies_model.mjs';
import express from 'express';
const app = express();

const PORT = 3000;

/**
 * Create a new movie with the title, year and language provided in the query parameters
 */
app.get("/create", (req, res) => {
    console.log(req.query);
    movies.createMovie(req.query.title, req.query.year, req.query.language)
        .then(movie => {
            res.send(movie);
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });
});

/**
 * Retrive movies. 
 * If the query parameters include a year, then only the movies for that year are returned.
 * Otherwise, all movies are returned.
 */
app.get("/retrieve", (req, res) => {
    console.log(req.query);
    // Is there a query parameter named year? If so add a filter based on its value.
    const filter = req.query.year === undefined
        ? {}
        : { year: req.query.year };
    movies.findMovies(filter, '', 0)
        .then(movies => {
            console.log(movies)
            res.send(movies);
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });

});

/**
 * Update the movie whose _id is provided and set its title, year and language to
 * the values provided in the query parameters
 */
app.get("/update", (req, res) => {
    console.log(req.query);
    movies.replaceMovie(req.query._id, req.query.title, req.query.year, req.query.language)
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
 * Delete the movie whose _id is provided in the query parameters
 */
app.get("/delete", (req, res) => {
    console.log(req.query);
    movies.deleteById(req.query._id)
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