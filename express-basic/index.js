const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

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
  { id: 1, title: 'Hello'},
  { id: 2, title: 'Her'},
  { id: 3, title: 'Hack'},
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

/* POST /api/movies */
app.post('/api/movies', (req, res) => {
  const schema = {
    title: Joi.string().min(2).required(),
  };
  
  const movie = {
    id: movies.length + 1,
    title: req.body.title
  };
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    res.status(400).send(result.error.message);
  } else {
    movies.push(movie);
  }
  res.send(movie);
});

/* PUT /api/movies/1 */
app.put('/api/movies/:id', (req, res) => {
  const reqSchema = {
    id: Joi.number().required(),
  };
  const bodySchema = {
    title: Joi.string().min(2).required(),
  };
  
  const reqResult = Joi.validate(req.params, reqSchema);
  const bodyResult = Joi.validate(req.body, bodySchema);
  if (reqResult.error || bodyResult.error) {
    if (reqResult.error) res.status(400).send(reqResult.error.message);
    if (bodyResult.error) res.status(400).send(bodyResult.error.message);
  } else {
    const movie = movies.find((movie) => {
      if (movie.id === parseInt(req.params.id)) {
        movie.title = req.body.title;
        return true;
      } else {
        return false;
      }
    });
    if (!movie) {
      res.status(400).send(`id ${req.params.id} is not exist.`);
    } else {
      res.send(`id ${movie.id} is modified.`);
    }
  };
});

/* DELETE /api/movies/1 */
app.delete('/api/movies/:id', (req, res) => {
  const schema = {
    id: Joi.number().required()
  };
  // console.log(req);
  const result = Joi.validate(req.params, schema);
  if (result.error) {
    res.status(400).send(result.error.message);
  } else {
    movies.find((movie, index) => {
      if (movie.id === parseInt(req.params.id)) {
        movies.splice(index,1);
        return true;
      } else {
        return false;
      }
    });
  }
  res.send(movies);
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));