// Get the mongoose object
import mongoose from 'mongoose';

// Prepare to the database users_db in the MongoDB server running locally on port 27017
mongoose.connect(
    'mongodb://localhost:27017/users_db',
    { useNewUrlParser: true }
);

// Connect to to the database
const db = mongoose.connection;

// The open event is called when the database connection successfully opens
db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});

/**
 * Define the schema
 */
const userschema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: false }
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const user = mongoose.model("user", userschema);

/**
 * Create a user
 * @param {String} name
 * @param {Number} age 
 * @param {String} email
 * @param {Number} phoneNumber 
 * @returns A promise. Resolves to the JSON object for the document created by calling save
 */
const createUser = async (name, age, email) => {
    // Call the constructor to create an instance of the model class user
    const user = new user({ name: name, age: age, email: email });
    // Call save to persist this object as a document in MongoDB
    return user.save();
}

const createUser = async (name, age, email, phoneNumber) => {
    // Call the constructor to create an instance of the model class user
    const user = new user({ name: name, age: age, email: email, phoneNumber: phoneNumber });
    // Call save to persist this object as a document in MongoDB
    return user.save();
}

/**
 * Retrive users based on the filter, projection and limit parameters
 * @param {Object} filter 
 * @param {String} projection 
 * @param {Number} limit 
 * @returns 
 */
const findUsers = async (filter, projection, limit) => {
    const query = user.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

/**
 * Replace the given properties of the user with the id value provided
 * @param {String} _id 
 * @param {String} name
 * @param {Number} age 
 * @param {String} email 
 * @param {Number} phoneNumber
 * @returns A promise. Resolves to the number of documents modified
 */
const replaceUser = async (_id, name, age, email) => {
    const result = await user.replaceOne({ _id: _id },
        { name: name, age: age, email: email });
    return result.modifiedCount;
}

const replaceUser = async (_id, name, age, email, phoneNumber) => {
    const result = await user.replaceOne({ _id: _id },
        { name: name, age: age, email: email, phoneNumber: phoneNumber });
    return result.modifiedCount;
}

/**
 * Delete the user with provided id value
 * @param {String} _id 
 * @returns A promise. Resolves to the count of deleted documents
 */
const deleteById = async (_id) => {
    const result = await user.deleteOne({ _id: _id });
    // Return the count of deleted document. Since we called deleteOne, this will be either 0 or 1.
    return result.deletedCount;
}

export { createUser, findUsers, replaceUser, deleteById };