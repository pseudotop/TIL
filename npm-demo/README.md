# NPM

## 1. npm 이란?
> **NPM**(node package manage)은 `node.js`의 모듈을 관리 및 배포해주는 패키지 관리자다.
## 2. npm 명령어
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
### 2.1. 자주 사용하는 npm 명령어
| 명령어               | 설명             | 실행 예시 |
| -------------------- | ---------------- | --------- |
| npm -v               | npm version 보기 | 6.4.1     |
| npm i <package-name> | npm package 설치 | npm i express |
| npm i -g <package-name> | npm global 설치. 시스템 설치를 의미. CLI가 여기에 속함 | npm i -g nodemon |
| npm i -D <package-name> | npm devDependency로 설치. 개발 환경에서만 사용하는 모듈이다. 실제 배포에는 포함되지 않음 | npm i -D jshint |
| npm i -E <package-name> | npm 버전 고정 설치 | npm i -E express |
| npm r <package-name> | npm package 삭제(rm, remove, uninstall) | npm r express |
| npm ls | 설치된 모듈 목록 확인 | npm ls -depth=0 |
| npm login | npm 패키지를 등록하기 위해, 로그인(npm 계정 필요) | npm login |
| npm publish | npm 패키지를 등록하기 위해, 배포 | |
| npm version <module-version> | npm 패키지를 업데이트 할 때 사용 | npm version minor |

## 3. npm 활용
> 본 섹션에서는 실제 프로젝트로 만들어 실습해본다.
### 3.1. 시작하기
```bash
$ cd <working_directory>
$ npm init
...
```
- `npm init`이후에 직접 설정해야하는 변수들이 있다. 이 과정을 생략하고 싶으면 `npm init -y`을 사용한다.
- `ls`로 확인해보면 `package.json`이 생긴 것을 확인할 수 있다.
```bash
# in <working_directory>
$ ls
package.json
```
- `package.json`에 어떤 내용이 담겨있는지는 다음 [섹션](#32-package.json)에서 확인해보자.

### 3.2. package.json 뜯어보기

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
  "dependencies": { // npm install로 설치 후 저장
    "express": "^4.16.4", 
    "underscore": "^1.9.1"
  },
  "devDependencies": { // npm install -D로 설치 후 저장
    "jshint": "^2.9.6"
  }
}
```

> dependencies & version
- `"express": "4.16.4"` : `"모듈명": "Major.Minor.Patch"`

- 이를 **시맨틱 버저닝**[https://semver.org/](https://semver.org/)이라고 한다

  | 표시 버전   | 버저닝(Versioning) | 활용 예시                                                    |
  | ----------- | ------------------ | :----------------------------------------------------------- |
  | [**X**].y.z | Major              | 이전 버전과 호환이 안되는 경우. 이전 함수를 사용할 수 없을 때 |
  | x.[**Y**].z | Minor              | 이전 버전과 호환은 되는데, 기능이 추가된 경우                |
  | x.y.[**Z**] | Patch              | 간단한 버그 수정시                                           |

- `^`: 메이저 버전만 고정 

  - `"express": "^4.16.4"` : `"4.0.0 ~ 4.x.x"`

- `~`: 메이저.마이너 버전 고정

  - `"express": "~4.16.4"` : `"4.16.0 ~ 4.16.x"`
