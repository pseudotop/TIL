console.log('메인 코드 진행중 ...');

async function run() {
  try {
    const user = await getUser(1);
    const repos = await getRepos(user.githubID);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (error) {
    console.error(error.message);
  }
}

run();

console.log('메인 코드 계속 진행중 ....');

/* functions */

function getUser(id) {
  console.log('Reading Data from DB');
  const users = [{
      id: 1,
      githubID: 'neo'
    },
    {
      id: 2,
      githubID: 'john'
    },
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(user => user.id === id);
      if (user) resolve(user);
      else reject(new Error(`Cannot find user with ID ${id}`))
    }, 0);
  });
}

function getRepos (userID) {
  console.log(`Finding [ ${userID} ]'s all github repo... `);
  return new Promise((resolve, reject) => {
    const user = userID;
    setTimeout(() => {
      if (user) resolve(['TIL', 'ES6', 'Express-demo']);
      else reject(new Error(`Can not find user w/ github id ${userID}`));
    },1000);
});
}

function getCommits (repo) {
  console.log(`Getting all commits in [ ${repo} ] `);
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      if (true) resolve(['Learn Express', 'Learn ecma script6']);
      else reject(new Error('kkekke'));
    }, 1000);
  })
}