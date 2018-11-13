const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/exercise-basic', {
    useNewUrlParser: true
  })
  .then(() => console.log('Connected to mongodb'))
  .catch(error => console.error(error.message));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
  tags: [String],
  date: {
    type: Date,
    default: Date.now
  },
  isPublished: Boolean,
});

const Course = mongoose.model('Course', courseSchema);
/*
exercise 1
    1. publish 된 course 들 중에서 backend 코스인 것들을,
    2. 이름 오름차순으로 정렬하고,
    3. name 과 author 만을,
    4. 출력해보자구!
*/
async function exercise1() {
  const courses = await Course
    .find({ tags: { $in: ['backend'] } })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
  console.log(courses);
}

/*
exercise 2
    1. publish 된 course 들 중에서 backend 와 frontend 모두를,
    2. price 내림차순으로,
    3. name 과 price 만,
    4. 출력해보자구!
*/
async function exercise2() {
  const courses = await Course
    .find({ tags: { $in: ['backend', 'frontend'] } })
    .sort({ price: -1 })
    .select({ name: 1, price: 1 });
  console.log(courses);
}

/*
exercise 3
    1. 모든 course 들 중에서
    2. price 15 이상이거나,
    3. name 에 대소문자 구분없이 'js' 가 들어간 강의들을,
    4. 출력해보자구!
*/
async function exercise3() {
  const courses = await Course
    .find()
    .or([{ price: { $gte: 15 } }, { name: /js/i }]);
  console.log(courses);
}

// exercise1();
// exercise2();
exercise3();