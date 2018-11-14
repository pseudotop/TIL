## MongoDB 고급
**JOIN**, **VIEW**등의 다양한 SQL문을 활용한다.
> `relation` collection 생성
```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/relation')
  .then(() => console.log('Connected to MongoDB'))
  .catch( error => console.error(error.message));
```
### 