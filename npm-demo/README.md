# NPM

## npm 이란?

## npm 명령어
- npm 명령어는 매우 다양하다
> npm command 및 옵션들
```bash
$ npm

Usage: npm <command>

where <command> is one of:
    access, adduser, audit, bin, bugs, c, cache, ci, cit,
    completion, config, create, ddp, dedupe, deprecate,
    dist-tag, docs, doctor, edit, explore, get, help,
    help-search, hook, i, init, install, install-test, it, link,
    list, ln, login, logout, ls, outdated, owner, pack, ping,
    prefix, profile, prune, publish, rb, rebuild, repo, restart,
    root, run, run-script, s, se, search, set, shrinkwrap, star,
    stars, start, stop, t, team, test, token, tst, un,
    uninstall, unpublish, unstar, up, update, v, version, view,
    whoami

npm <command> -h  quick help on <command>
npm -l            display full usage info
npm help <term>   search for help on <term>
npm help npm      involved overview

Specify configs in the ini-formatted file:
    C:\Users\student\.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config
```
### 자주 사용하는 npm 명령어
| 명령어               | 설명             | 실행 예시 |
| -------------------- | ---------------- | --------- |
| npm -v               | npm version 보기 | 6.4.1     |
| npm i [package-name] | npm package 설치 |           |
| npm i -g [package-name] | npm global 설치. |           |
| npm i -D [package-name] |                  |           |
| npm i -E [package-name] | npm 버전 고정 설치 | |
| npm r [package-name] | npm package 삭제(rm, remove, uninstall) | |
| npm ls | 설치된 모듈 목록 확인 | npm ls -depth=0 |
|  |  | |

### package.json 뜯어보기

```javascript
{
  "name": "npm-demo",
  "version": "1.0.0",
  "description": "Learn npm",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "pseudotop",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.4",
    "underscore": "^1.9.1"
  },
  "devDependencies": {
    "jshint": "^2.9.6"
  }
}
```

> dependencies
- `"express": "4.16.4"` : `"모듈명": "Major.Minor.Patch"`
- `^`: 메이저 버전만 고정 
  - `"express": "^4.16.4"` : `"4.0.0 ~ 4.x.x"`
- `~`: 메이저.마이너 버전 고정
  - `"express": "~4.16.4"` : `"4.16.0 ~ 4.16.x"`
