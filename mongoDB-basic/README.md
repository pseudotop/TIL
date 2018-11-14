## MongoDB 다루기
NoSQL의 대표적인 DBMS. 

| 스키마        | MySQL    | MongoDB                                    |
| ------------- | -------- | ------------------------------------------ |
| 데이터 베이스 | DB       | DB                                         |
| 테이블        | Table    | Collection                                 |
| 레코드        | Row      | Document                                   |
| Attribute     | Column   | Field                                      |
|               | JOINs    | Embedded documents, $lookup & $graphLookup |
|               | GROUP_BY | Aggregation Pipeline                       |



### MongoDB 설치
- [몽고DB 홈페이지 방문](https://www.mongodb.com/) > [몽고DB Download Center](https://www.mongodb.com/download-center/community) > 최신버전 다운로드(.msi) > 설치 > compass 추가설치 > 완료
> 만약 compass를 추가로 설치할 수 없다면, 홈페이지에서 따로 설치해줘야함 
#### 시스템 변수(PATH) 설정
##### Windows
- **내 컴퓨터** 우클릭 > 속성 > 고급 시스템 설정 > 환경변수 > PATH=%PATH%;`C:\Program Files\MongoDB\Server\<version>\bin`
- Default path to be saved : `C:\data\db`
  - 자동으로 생성이 안되므로 `C:\data\db`로 디렉토리를 만들어 주어야함
- cmd.exe > `mongod` 실행
  - 

### MongoDB 실행

### 참고

https://docs.mongodb.com/manual/reference/operator/update/

```
//.find({ price: { $lt: 15, $gt: 10 } })
  //.find({ price: { $in: [10, 15] } })
    // .find({ isPublished: true })
    // .limit(10)
    // .sort({ name: -1 })
    // .select({ name: 1, tags: 1 })
    // .find({ author: /^ne/ }) // 시작을 "ne"로 시작하는 문자열 모두
    // .find({ author: /hn$/ }) // 끝을 "hn"의 문자열 모두
    // .find({ author: /.*oh.*/ }) // 문자열 내에 "oh"가 있는 것 모두
```



```
/* 비교 쿼리 연산자
  $eq (equal)
  $neq (not equal)
  $gt (greater than)
  $gte (greater than or equal to)
  $lt (less than)
  $lte (less than or equal to)
  $in (in)
  $nin (not in)
*/
```
```
/* 논리 쿼리 연산자
  .and
    Course.find()
    .and([{ author: 'neo' }, { isPublished: false }])
  .or
    Course.find()
    .or([{ author: 'neo' }, { isPublished: false }])
*/
```