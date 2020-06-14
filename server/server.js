// Init and use dotenv
require('dotenv').config();

const express = require('express');
const app = express();

// Port assigned by Heroku (process.env.PORT) or 1234
const serverPort = process.env.PORT || 1234;

// Serve static files to build frontend
app.use(express.static(__dirname + '/../build'))

// All post.body  > json
app.use(express.json());

// Auth middleware
const auth = require('./auth')
app.use(auth);

// ROUTES
app.use('/api/assets', express.static('hamsters'));

const chartsRoute = require('./routes/charts')
app.use('/api/charts', chartsRoute);

const gamesRoute = require('./routes/games')
app.use('/api/games', gamesRoute);

const hamstersRoute = require('./routes/hamsters')
app.use('/api/hamsters', hamstersRoute);

const statsRoute = require('./routes/stats')
app.use('/api/stats', statsRoute);

// Run server on serverPort
app.listen(serverPort, () => {
    console.log('Server running on port ' + serverPort);
})