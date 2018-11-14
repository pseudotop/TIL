const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hello-mongo', { useNewUrlParser: true })
  .then(() => console.log('Connected to mongodb'))
  .catch( error => console.error(error.message));

/** Available schema Datatypes
 * : String, Number, Date, Buffer, Boolean, ObjectID, Array
 */

/** Available validating options
 * String: minlength, maxlength, match, enum
 * Numbers, Dates: min, max
 * All: required
 */
const courseSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  author: String,
  tags: { 
    type: Array,
    // custom validator
    validate: {
      validator: function(tags) {
        const result = tags.every(tag => tag.length > 0);
        return tags && tags.length > 0 && result;
      },
      message: 'A Course should have at least 1 tag'
    }
  },
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
    name: 'DApp 빌드하기',
    author: 'a',
    tags: ['a','b'],
    isPublished: false,
  });
  try {
    // const result = await course.validate();
    const result = await course.save();  // commit
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}
createCourse();

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
  // .findById(id: ObjectId), _id가 그냥 문자열이면 .findById는 비정상 작동
  const course = await Course.findById(id);
  if(!course) return;

  // Change, Commit 이전
  course.author = '멀캠';
  course.tags = ['가즈아'];
  console.log(course);

  // Save, Commit
  const result = await course.save();
  console.log(result);
}
// updateCourse("5bea69665caf5323389b053b");
// 2. Update First: 직접 Update => result
async function updateCourses() {
  // "update()" is deprecated. Use updateOne, updateMany or bulkWrite instead.
  // "findByIdAndUpdate(id, {}, { new: true })" is used where id means _id, new means commit.
  const result = await Course.updateMany({ isPublished: true }, {
    $set: {
      author: '111111',
    },
  });
  console.log(result);
}

// updateCourses();

/* Destroy */
async function removeCourse(id) {
  const result = await Course.deleteOne({ _id: id });
  console.log(result);
}

// removeCourse("5bea69665caf5323389b053b");