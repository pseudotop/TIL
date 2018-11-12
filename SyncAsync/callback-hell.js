console.log('메인 코드 진행중 ...');
setTimeout(() => {
  console.log('Reading Data from DB');
}, 0);
getUser(1, (u) => {
  console.log(u);
  getRepos(u.githubID, repos => {
    console.log(repos);
    getCommits(repos[0], (commits) => {
      console.log(commits);
    })
  });
});
// console.log(getUser(1));
console.log('메인 코드 계속 진행중 ....');

function getUser(id, callback) {
  const users = [{
      id: 1,
      githubID: 'neo'
    },
    {
      id: 2,
      githubID: 'john'
    },
  ];
  setTimeout(() => {
    console.log('Reading Data from DB');
    const user = users.find(user => user.id === id);
    // ready!
    callback(user);
  }, 0);
}

function getRepos (userID, callback) {
  console.log(`Finding [ ${userID} ]'s all github repo... `);
  setTimeout(() => {
    callback(['TIL', 'ES6', 'Express-demo']);
  },1000);
}

function getCommits (repo, callback) {
  console.log(`Getting all commits in [ ${repo} ] `);
  setTimeout(()=>{
    callback(['Learn Express', 'Learn ecma script6']);
  }, 1000);
}