import * as users from './users_model.mjs';
import express from 'express';
const app = express();

const PORT = 3000;

/**
 * Create a new user with the name, age, email, and (optional) phone number provided in the query parameters
 */
app.get("/create", (req, res) => {
    console.log(req.query);
    users.createUser(req.query.name, req.query.age, req.query.email, req.query.phoneNumber)
        .then(user => {
            res.send(user);
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });
});

/**
 * Retrive users. 
 * If the query parameters include a 
 * 
 * 
 * FIX THIS RIGHT HERE, 
 * 
 * 
 * then only the users for that year are returned.
 * Otherwise, all users are returned.
 */
app.get("/retrieve", (req, res) => {
    console.log(req.query);
    // Is there a query parameter named AND THIS? If so add a filter based on its value.
    const filter = req.query.year === undefined
        ? {}
        : { year: req.query.year };
    users.findUsers(filter, '', 0)
        .then(users => {
            console.log(users)
            res.send(users);
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });

});

/**
 * Update the user whose _id is provided and set its properties to
 * the values provided in the query parameters
 */
app.get("/update", (req, res) => {
    console.log(req.query);
    users.replaceUser(req.query._id, req.query.name, req.query.age, req.query.email, req.query.phoneNumber)
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
 * Delete the user whose _id is provided in the query parameters
 */
app.get("/delete", (req, res) => {
    console.log(req.query);
    users.deleteById(req.query._id)
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