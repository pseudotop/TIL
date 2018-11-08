const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("HAPPY HACKING");
});

app.get('/api', (req, res) => {
  const data = {
    ceo: "john",
    director: "neo",
    intern: 'js',
    partner: 'tak'
  };
  res.send(data);
});

app.get('/api/courses/:id', (req, res) => {
  res.send(req.params.id);
});

app.get('/api/posts/:year', (req, res) => {
  res.send(req.query);
});

const port  = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));