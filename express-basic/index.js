const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Happy Hacking');
});

app.get('/:name', (req, res) => {
  res.send(`Hi, ${req.params.name}`);
});

// CRUD
// CREATE READ UPDATE DESTROY
// POST   GET  PUT    DELETE
const movies = [
  { id: 1, name: 'Hello'},
  { id: 2, name: 'Her'},
  { id: 3, name: 'Hack'},
];

/* GET /api/movies */
app.get('/api/movies', (req, res) => {
  res.send(movies);
});

/* GET /api/movies/1 */
app.get('/api/movies/:id', (req, res) => {
  const movie = movies.find(movie => parseInt(req.params.id) === movie.id);
  if (!movie) {
    res.status(404).send(`Movie with given id(${req.params.id}) is not found`);
  }
  console.log(movie);
  res.send(movie);
});

/* POST /api/movies/1 */
// app.post();

/* PUT /api/movies/1 */
// app.put();

/* DELETE /api/movies/1 */
// app.delete();


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));