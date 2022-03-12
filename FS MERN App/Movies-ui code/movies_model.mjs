// Get the mongoose object
import mongoose from 'mongoose';

// Prepare to the database movies_db in the MongoDB server running locally on port 27017
mongoose.connect(
    'mongodb://localhost:27017/movies_db',
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
const movieSchema = mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    language: { type: String, required: true }
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Movie = mongoose.model("Movie", movieSchema);

/**
 * Create a movie
 * @param {String} title 
 * @param {Number} year 
 * @param {String} language 
 * @returns A promise. Resolves to the JSON object for the document created by calling save
 */
const createMovie = async (title, year, language) => {
    // Call the constructor to create an instance of the model class Movie
    const movie = new Movie({ title: title, year: year, language: language });
    // Call save to persist this object as a document in MongoDB
    return movie.save();
}

/**
 * Retrive movies based on the filter, projection and limit parameters
 * @param {Object} filter 
 * @param {String} projection 
 * @param {Number} limit 
 * @returns 
 */
const findMovies = async (filter, projection, limit) => {
    const query = Movie.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

/**
 * Replace the title, year, language properties of the movie with the id value provided
 * @param {String} _id 
 * @param {String} title 
 * @param {Number} year 
 * @param {String} language 
 * @returns A promise. Resolves to the number of documents modified
 */
const replaceMovie = async (_id, title, year, language) => {
    const result = await Movie.replaceOne({ _id: _id },
        { title: title, year: year, language: language });
    return result.modifiedCount;
}


/**
 * Delete the movie with provided id value
 * @param {String} _id 
 * @returns A promise. Resolves to the count of deleted documents
 */
const deleteById = async (_id) => {
    const result = await Movie.deleteOne({ _id: _id });
    // Return the count of deleted document. Since we called deleteOne, this will be either 0 or 1.
    return result.deletedCount;
}

export { createMovie, findMovies, replaceMovie, deleteById };