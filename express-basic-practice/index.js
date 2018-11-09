const Joi = require('joi');
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json());

/* Initializing global variables */
const flags = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};
const filePath = __dirname + '/db.json';
const users = [
  { id: 1, name: 'pseudotop1', email: 'pseudotop1@gmail.com', age: 30 },
  { id: 2, name: 'pseudotop2', email: 'pseudotop2@gmail.com', age: 20 },
  { id: 3, name: 'pseudotop3', email: 'pseudotop3@gmail.com', age: 21 },
  { id: 4, name: 'pseudotop4', email: 'pseudotop4@gmail.com', age: 22 },
];

/* File write or read */
fs.open(filePath, 'r', (err) => {
  if (err) {
    if (err.code === 'ENOENT') { 
      fs.writeFile(filePath, JSON.stringify(users), 'utf8', (err) => {
        console.log(`File is created`);
      });
      return;
    }
    throw err;
  } else {
    console.log(`File does already exist`);
    fs.readFile(filePath, (err, data) => {
      const jsonData = JSON.parse(data);
      if (err) {
        throw err;
      }
      if (jsonData.length>0) {
        while (users.length > 0) {
          users.shift();
        }
        jsonData.forEach((el) => {
          users.push(el);
        });
      } else {
        fs.writeFile(filePath, JSON.stringify(users), 'utf8', (err) => {
          console.log('Initialize dataset');
        });
      }
    });
  }
});


/* GET /api/users */
app.get('/api/users',(req, res) => {
  res.send(users);
});

/* POST /api/users */
app.post('/api/users',(req, res) => {
  /** Schema
   *  name  : string, required, char > 1
   *  email : string, required, char > 5
   *  age   : integer, int > 3
   */
  // 추가하고 싶은 user 객체에 id 객체가 없을 경우도 같이 처리
  const newUser = req.body.id ? req.body : { id: Math.max(...users.map(user=>user.id)) + 1, ...req.body};
  // user 검색
  const user = findUser(users, newUser);
  // user가 있으면 리턴
  if (user) return res.send(`UserID ${user.id} is exist`);

  console.log(newUser);
  // Joi로 스키마 검증
  const { error } = validateUser(newUser);
  if (error) return res.send(error.message);
  // User 등록
  updateUser(users, newUser, flags.POST);
  res.send(newUser);
});

/* PUT /api/users/:id */
app.put('/api/users/:id',(req, res) => {
   /** Schema
   *  name  : string, required, char > 1
   *  email : string, required, char > 5
   *  age   : integer, int > 3
   */

  // user 검색
  const user = findUser(users, req.params.id);
  // user 없으면 리턴
  if (!user) return res.send(`UserID ${req.params.id} is not exist`);

  // 스키마 검증
  const { error } = validateUser(req.body);
  if (error) return res.send(error.message);

  req.body.id = user.id;
  // 리소스 변경
  updateUser(users, req.body, flags.PUT);
  res.send(req.body);
});

/* DELETE /api/users/:id */
app.delete('/api/users/:id',(req, res) => {
  // user 검색
  const user = findUser(users,req.params.id);
  // user 없으면 리턴
  if (!user) return res.send(`UserID ${req.params.id} is not exist`);
  
  // user 삭제
  updateUser(users, user, flags.DELETE);
  res.send(user);
});

/* Port setting */
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening to port ${port}`));

/* Refactoring */
function validateUser(user) {
  const schema = {
    id: Joi.number(),
    name: Joi.string().min(1).required(),
    email: Joi.string().min(5).required(),
    age: Joi.number().min(3)
  }
  return Joi.validate(user, schema);
}

function findUser(users, id) {
  return users.find(user => user.id === eval(id));
}

/* users의 CRUD를 한번에 처리 */
function updateUser(users, user, _flag=flags.GET){
  const userAddr = findUser(users, user.id);
  if (_flag === flags.GET) return;
  else if (_flag === flags.POST) users.push(user);
  else if (_flag === flags.PUT) users[users.indexOf(userAddr)] = user;
  else if (_flag === flags.DELETE) users.splice(users.indexOf(userAddr), 1);
  // 처리 이후에 users 객체를 json파일로 저장
  writeFile(users);
}

function writeFile(users) {
  fs.writeFile(filePath, JSON.stringify(users), 'utf8', (err) => {
    if (err) {
      throw err;
    }
    console.log(users);
    console.log(`write complete`);
  });
}