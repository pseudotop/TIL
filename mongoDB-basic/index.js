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

// mongoose.model(컬랙션 이름, 스키마)
// 컬랙션 이름은 table 이름처럼 복수형
const Course = mongoose.model('Course', courseSchema);

/* CRUD Operation */
/* CREATE */
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

/* READ */
async function getCourses() {
  const courses = await Course
  console.log(courses);
}

// getCourses();

/* UPDATE */
// 1. Query First: find => change => save
async function updateCourse(id) {
  // Find
  // const course = Course.find({ _id: id })
  const course = await Course.findById(id);
  if(!course) return;

  // Change
  course.author = '병준';
  course.tags = ['가즈아'];

  // Save
  const result = await course.save();
  console.log(result);
}

// 2. Update First: 직접 Update => result