## 동기 & 비동기(Sync & Async)
`javascript`는 
[TOC]
### 콜백 지옥(Callback hell)

### 프로미스(Promise)
#### 프로미스 `all` 과 `race`

### Async & Await 
> async-await.js
```javascript
async function run() {
  const user = await getUser(1);
  const repos = await getRepos(user.githubID);
  const commits = await getCommits(repos[0]);
  console.log(commits);
}
```
`await`는 `Promise`