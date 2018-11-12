const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const auth = require('./middlewares/auth');
const logger = require('./middlewares/logger');
const Joi = require('joi');
const express = require('express');
const app = express();

console.log(app.get('env'));
console.log(app.get('debug'));

app.use(helmet());
// app.get('env')는 시스템 변수 NODE_ENV를 가져온다.
// 만약 NODE_ENV가 없다면 app.get('env')는 'development'를 가져온다.
if (app.get('env') === 'development') {
  debug('MORGAN을 실행합니다');
  app.use(morgan('dev'));
}


// body: string => json
app.use(express.json());
// url: string => object
app.use(express.urlencoded({ extended: true }));
// usage: http status code file
app.use(express.static('public'));

app.use(logger);
app.use(auth);

app.set('view engine', 'pug');
app.set('views', './views'); // Default

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Happy Hacking',
    greeting: 'May you have HAPPY HACKING'
  });
});

app.get('/:name', (req, res) => {
  res.send(`Hi, ${req.params.name}`);
});

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
app.get('/api/movies', (req, res) => {
  res.send(movies);
});

/* GET /api/movies/1 */
app.get('/api/movies/:id', (req, res) => {
  const movie = getMovie(movies, req.params.id);
  if (!movie) {
    res.status(404).send(`Movie with given id(${req.params.id}) is not found`);
  }
  res.send(movie);
});

/* POST /api/movies */
app.post('/api/movies', (req, res) => {
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
app.put('/api/movies/:id', (req, res) => {
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
app.delete('/api/movies/:id', (req, res) => {
  // movies 에서 id 로 movie 찾기
  const movie = getMovie(movies, req.params.id);
  // 없으면 404
  if (!movie) return res.status(404).send(`The movie with the given ID is not exist`);

  // Delete logic 수행
  const index = movies.indexOf(movie);
  movies.splice(index, 1);

  // 삭제된 data send
  res.send(movie);
})

function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(2).required(),
  }
  return Joi.validate(movie, schema);
}

function getMovie(movies, id) {
  return movies.find(movie => movie.id === eval(id));
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));