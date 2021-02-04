require('dotenv').config(); // loads values from .env into process.env

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// database connection

const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clusti.p4ndc.mongodb.net/webdevdb?retryWrites=true&w=majority`;
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to database:'));

db.once('open', () => {
    console.log('Succesfully connected to database');
});

const UserSchema = new mongoose.Schema({
    handle: {type: String, required: true, trim: true},
    color: {type: String, default: '#000'}
});

const model = mongoose.model('UserModel', UserSchema);


// App setup

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})



