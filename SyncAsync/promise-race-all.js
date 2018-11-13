const p1 = new Promise((resolve, reject) => {
  console.log('Fecthing from Bank1 ... ');
  setTimeout(()=>{
    const response = { bank: 1, delayed: false };
    resolve(!response.delayed);
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  console.log('Fecthing from Bank2 ... ');
  setTimeout(()=>{
    const response = { bank: 1, delayed: false };
    resolve(!response.delayed);
  }, 1400);
});
const p3 = new Promise((resolve, reject) => {
  console.log('Fecthing from Bank3 ... ');
  setTimeout(()=>{
    const response = { bank: 1, delayed: false };
    resolve(!response.delayed);
  }, 1800);
});

Promise.all([p1, p2, p3])
  .then(result => console.log(result));
  // .catch();

Promise.race([p1, p2, p3])
  .then(result => console.log(result));