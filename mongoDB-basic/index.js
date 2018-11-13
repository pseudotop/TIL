const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hello-mongo', { useNewUrlParser: true })
  .then(() => console.log('Connected to mongodb'))
  .catch( error => console.error(error.message));

/** Available schema Datatypes
 * : String, Number, Date, Buffer, Boolean, ObjectID, Array
 */
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [ String ],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model('Course', courseSchema);

/* CRUD Operation */
async function createCourse() {
  const course = new Course({
    name: '실전 DApp 빌드하기',
    author: 'john',
    tags: ['Ethereum', 'Blockchain', 'DApp'],
    isPublished: false,
  });
  try {
    const result = await course.save();  // commit
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

async function getCourses() {
  const courses = await Course
  //.find({ price: { $lt: 15, $gt: 10 } })
  //.find({ price: { $in: [10, 15] } })
    // .find({ isPublished: true })
    // .limit(10)
    // .sort({ name: -1 })
    // .select({ name: 1, tags: 1 })
    // .find({ author: /^ne/ }) // 시작을 "ne"로 시작하는 문자열 모두
    // .find({ author: /hn$/ }) // 끝을 "hn"의 문자열 모두
    // .find({ author: /.*oh.*/ }) // 문자열 내에 "oh"가 있는 것 모두
  console.log(courses);
}
/* 비교 쿼리 연산자
  $eq (equal)
  $neq (not equal)
  $gt (greater than)
  $gte (greater than or equal to)
  $lt (less than)
  $lte (less than or equal to)
  $in (in)
  $nin (not in)
*/
/* 논리 쿼리 연산자
  .and
    Course.find()
    .and([{ author: 'neo' }, { isPublished: false }])
  .or
    Course.find()
    .or([{ author: 'neo' }, { isPublished: false }])
*/
     
getCourses();