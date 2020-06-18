// Init and use dotenv
require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

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
// Get images
app.use('/api/assets', express.static(__dirname + '/../server/hamsters'));

const chartsRoute = require('./routes/charts')
app.use('/api/charts', chartsRoute);

const gamesRoute = require('./routes/games')
app.use('/api/games', gamesRoute);

const hamstersRoute = require('./routes/hamsters')
app.use('/api/hamsters', hamstersRoute);

const statsRoute = require('./routes/stats')
app.use('/api/stats', statsRoute);

const uploadRoute = require('./routes/upload')
app.use('/api/upload', uploadRoute);

// Make it possible to enter Heroku-app from another route than /
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/../build/index.html'), function(err) {
    if (err) {
          res.status(500).send(err)
        }
    })
})

// Run server on serverPort
app.listen(serverPort, () => {
    console.log('Server running on port ' + serverPort);
})