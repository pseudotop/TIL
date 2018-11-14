const { Genre, validate } = require('../models/genre');
const mongoose = require('mongoose');
const express = require('express');
// app = express(); => router = express.Router();
const router = express.Router();

router.get('/', async (req, res) => {
  const genres = await Genre.find().sort('name');
  res.send(genres);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if(error) return res.status(400).send(error.message);

  let genre = new Genre({ name: req.body.name });
  await genre.save();

  res.send(genre);
});

router.get('/:id', async (req, res) => {
  const genre = Genre.findById(req.params.id);
  if (!genre) return res.status(404).send('The genre with the given ID not found');
  res.send(genre);
})

router.patch('/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);

  const genre = await Genre.findByIdAndUpdate(req.params.id, {
    name: req.body.name
  }, { new : true });

  res.send(genre);
})

router.delete('/:id', async (req, res) => {
  const genre = await Genre.findByIdAndDelete(req.params.id);
  if (!genre) return res.status(404).send(`Can\'t find ${req.params.id}`);
  res.send(genre);
})

module.exports = router;