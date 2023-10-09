const mongoose = require("mongoose");


const mongoURL = "mongodb+srv://bhatia2003varun:varun003@cluster0.bzrtfu5.mongodb.net/Shoes";


mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true ,});

const db = mongoose.connection;


db.on('connected', () => {
    console.log('Connected to MongoDB successfully');
});


db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

module.exports = mongoose;