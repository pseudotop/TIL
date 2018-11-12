const express = require('express');
const router = express.Router();
const Joi = require('joi');

// CRUD
// CREATE READ UPDATE DESTROY
// POST   GET  PUT    DELETE
const movies = [{
    id: 1,
    title: 'Hello'
  },
  {
    id: 2,
    title: 'Her'
  },
  {
    id: 3,
    title: 'Hack'
  },
];

/* GET /api/movies */ 
router.get('/', (req, res) => {
  res.send(movies);
});

/* GET /api/movies/1 */ 
router.get('/:id', (req, res) => {
  const movie = getMovie(movies, req.params.id);
  if (!movie) {
    res.status(404).send(`Movie with given id(${req.params.id}) is not found`);
  }
  res.send(movie);
});

/* POST /api/movies */ 
router.post('/', (req, res) => {
  const {
    error
  } = validateMovie(req.body);
  if (error) return res.status(400).send(error.message);

  const movie = {
    id: movies.length + 1,
    title: req.body.title
  };
  movies.push(movie);

  res.send(movie);
});

/* PUT /api/movies/1 */ 
router.put('/:id', (req, res) => {
  // movies id 확인
  const movie = getMovie(movies, req.params.id);
  // 없으면 404
  if (!movie) return res.status(404).send(`id ${movie.id} is not exist`);

  // body 검증  
  const {
    error
  } = validateMovie(req.body);
  if (error) return res.status(400).send(error.message);

  // 데이터 send
  movie.title = res.body.title;
  res.send(movie);
});

/* DELETE /api/movies/1 */ 
router.delete('/:id', (req, res) => {
  // movies 에서 id 로 movie 찾기
  const movie = getMovie(movies, req.params.id);
  // 없으면 404
  if (!movie) return res.status(404).send(`The movie with the given ID is not exist`);

  // Delete logic 수행
  const index = movies.indexOf(movie);
  movies.splice(index, 1);

  // 삭제된 data send
  res.send(movie);
});

function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(2).required(),
  }
  return Joi.validate(movie, schema);
}

function getMovie(movies, id) {
  return movies.find(movie => movie.id === eval(id));
}

module.exports = router;