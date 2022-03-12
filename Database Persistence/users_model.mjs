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
 * Compile the model from the schema
 */

const User = mongoose.model("user", userschema);

/**
 * Create a user
 * @param {String} name
 * @param {Number} age 
 * @param {String} email
 * @param {Number} phoneNumber 
 * @returns A promise. Resolves to the JSON object for the document created by calling save
 */

const createUser = async (name, age, email, phoneNumber = null) => {
    // Call the constructor to create an instance of the model class user
    const user = new User({ name: name, age: age, email: email, phoneNumber: phoneNumber });
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
    const query = User.find(filter)
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

const replaceUser = async (_id, name, age, email, phoneNumber) => {

    if (name != undefined) {
        const result = await User.findByIdAndUpdate({_id: _id}, {name: name} )
    }
    if (age != undefined) {
        const result = await User.findByIdAndUpdate({_id: _id}, {age: age} )
    }
    if (email != undefined) {
        const result = await User.findByIdAndUpdate({_id: _id}, {email: email} )
    }
    if (phoneNumber != undefined) {
        const result = await User.findByIdAndUpdate({_id: _id}, {phoneNumber: phoneNumber} )
    }

    return 1;

}

/**
 * Delete the user with provided id value
 * @param {String} _id 
 * @returns A promise. Resolves to the count of deleted documents
 */

const deleteById = async (field) => {
    const result = await User.deleteMany({ field: field });
    
    return result.deletedCount;
}

export { createUser, findUsers, replaceUser, deleteById };