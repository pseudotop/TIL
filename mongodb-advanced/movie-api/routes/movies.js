const { Movie, validate } = require('../models/movie');
const mongoose = require('mongoose');
const express = require('express');
// app = express(); => router = express.Router();
const router = express.Router();

router.get('/', async (req, res) => {
  const movies = await Movie.find().sort('title');
  res.send(movies);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if(error) return res.status(400).send(error.message);

  const movieContents = req.body;
  let movie = new Movie(movieContents);
  await movie.save();

  res.send(movie);
});

router.get('/:id', async (req, res) => {
  const movie = Movie.findById(req.params.id);
  if (!movie) return res.status(404).send('The movie with the given ID not found');
  res.send(movie);
})

router.patch('/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);

  const movieContents = req.body;
  const movie = await Movie.findByIdAndUpdate(req.params.id, movieContents, { new : true });

  res.send(movie);
})

router.delete('/:id', async (req, res) => {
  const movie = await Movie.findByIdAndDelete(req.params.id);
  if (!movie) return res.status(404).send(`Can\'t find ${req.params.id}`);
  res.send(movie);
})

module.exports = router;