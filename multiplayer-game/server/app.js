require('dotenv').config(); // load values from .env into process.env

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');

const roomRoutes = require('./routes/rooms');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/public')));
app.use('/rooms', roomRoutes);

const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clusti.p4ndc.mongodb.net/playground?retryWrites=true&w=majority`;
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((res) => { 
        console.log('Connected to database');
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        })
    })
    .catch((err) => console.error.bind(console, 'Error connecting to database:'));
    
// handle errors after initial connection
mongoose.connection.on('error', err => {
    console.error.bind(console, 'Database error:')
  });


// routing
app.get('/', (req, res) => {
    res.redirect('/rooms')
});