const express = require('express')
const app = express();
const port = 4321
const ctrl = require('./controller')
const data = require('../data.json')

//endpoints
app.get('/api/movies', ctrl.getMovies);

app.get('/api/movie/:id', ctrl.getSingleMovie);

////

app.listen(port, () => console.log(`Listening on port ${port}.`))