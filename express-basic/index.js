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
  const movie = getMovie(movies, req.params.id);
  if (!movie) {
    res.status(404).send(`Movie with given id(${req.params.id}) is not found`);
  }
  res.send(movie);
});

/* POST /api/movies */
app.post('/api/movies', (req, res) => {
  const { error } = validateMovie(req.body);
  if (error) return res.status(400).send(error.message);
  
  const movie = {
    id: movies.length + 1,
    title: req.body.title
  };
  movies.push(movie);

  res.send(movie);
});

/* PUT /api/movies/1 */
// app.put('/api/movies/:id', (req, res) => {
//   const reqSchema = {
//     id: Joi.number().required(),
//   };
//   const bodySchema = {
//     title: Joi.string().min(2).required(),
//   };
  
//   const reqResult = Joi.validate(req.params, reqSchema);
//   const bodyResult = Joi.validate(req.body, bodySchema);
//   if (reqResult.error || bodyResult.error) {
//     if (reqResult.error) res.status(400).send(reqResult.error.message);
//     if (bodyResult.error) res.status(400).send(bodyResult.error.message);
//   } else {
//     const movie = movies.find((movie) => {
//       if (movie.id === parseInt(req.params.id)) {
//         movie.title = req.body.title;
//         return true;
//       } else {
//         return false;
//       }
//     });
//     if (!movie) {
//       res.status(404).send(`id ${req.params.id} is not exist.`);
//     } else {
//       res.send(`id ${movie.id} is modified.`);
//     }
//   };
// });
app.put('/api/movies/:id', (req, res) => {
  // movies id 확인
  const movie = getMovie(movies, req.params.id);
  // 없으면 404
  if(!movie) return res.status(404).send(`id ${movie.id} is not exist`);

  // body 검증
  // const result = validateMovie(req.body);
  
  const { error } = validateMovie(req.body);
  if (error) return res.status(400).send(error.message);
  
  // 데이터 send
  movie.title = res.body.title; 
  res.send(movie);
});

/* DELETE /api/movies/1 */
// app.delete('/api/movies/:id', (req, res) => {
//   const schema = {
//     id: Joi.number().required()
//   };
//   // console.log(req);
//   const result = Joi.validate(req.params, schema);
//   if (result.error) {
//     res.status(400).send(result.error.message);
//   } else {
//     movies.find((movie, index) => {
//       if (movie.id === parseInt(req.params.id)) {
//         movies.splice(index,1);
//         return true;
//       } else {
//         return false;
//       }
//     });
//   }
//   res.send(movies);
// });
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
  return movies.find( movie => movie.id === eval(id));
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));