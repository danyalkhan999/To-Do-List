const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

//connect to database
mongoose.connect('mongodb://127.0.0.1/todoDB', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Can't connect to MongoDb"));

// if connection is successfull
db.once('open', () => {
    console.log("Successfully connected to database");
});

module.exports = db;