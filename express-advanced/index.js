const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const auth = require('./middlewares/auth');
const logger = require('./middlewares/logger');
const movies = require('./routes/movies');
const home = require('./routes/home');

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
app.use('/',home);
app.use('/api/movies',movies);

app.set('view engine', 'pug');
app.set('views', './views'); // Default

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));