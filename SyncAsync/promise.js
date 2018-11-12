const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 100);
  // async 작업 중 ...
  if (number % 2 === 1) { // 성공
    resolve({ id: 1, email: 'bj@gmai.com', number});
  } else { // 실패
    reject(new Error('Error...'));
  }
});

promise
  .then( (user) => console.log(user) )
  .catch(error => console.error(error.message));