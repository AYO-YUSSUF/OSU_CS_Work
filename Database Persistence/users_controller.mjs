import * as users from './users_model.mjs';
import express from 'express';
const app = express();

const PORT = 3000;

let retrieveWithParam = 0;
let retrieveNoParam = 0;
let retrieveCount = 0;

app.use("/retrieve", (req, res, next) => {
    
    retrieveCount++;
    (Object.keys(req.query).length) == 0 ? retrieveNoParam++ : retrieveWithParam++;

    if ((retrieveCount) % 10 == 0) {
        console.log("Total retrieve requests : " + retrieveCount);
        console.log("Retrieve requests with 0 query parameters: " + retrieveNoParam);
        console.log("Retrieve requests with 1 or more query parameters: " + retrieveWithParam);
    }

    next()
  })

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
 * Retrieve users. 
 */
app.get("/retrieve", (req, res) => {
    console.log(req.query);
    const filter = req.query;
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
    users.deleteById(req.query._id, req.query.name, req.query.age, req.query.email, req.query.phoneNumber)
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