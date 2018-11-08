## RESTful API란?
- REST API를 준수한 API 서비스를 의미한다.
### 1. REST API의 탄생
**REST**(Representational State Transfer)는 HTTP의 주요 저자 중 한 사람인 로이 필딩(Roy Fielding)에 의해 2000년 최초로 세상에 소개되었다. 다양한 도메인에서도 이해하고 활용할 수 있도록 설계되었다는 것이 특징이다. 최근 공공데이터 활용에 있어 OPEN API를 성공적으로 이끈 것이 REST API라고 해도 과언이 아니다.

- 정확히 다음과 같은 두 항목을 준수한 API를 의미한다
  1. [CRUD](11-CRUD-준수)
  2. [URI](12-URI-준수)

#### 1.1. CRUD 준수
- 표현(Representations)을 의미하기도 한다. 
- 내용 추가 필요
#### 1.2. URI 준수
- 기본적으로 자원(Resource)을 표현해야 한다.
여기서 말하는 자원은 서버에서 제공하는 **DATA** 를 의미한다. 사용자 입장에서 무엇을 제공하는지 URI만 보고도 알 수 있어야한다.
- 내용 추가 필요

### 2. Refenrences
- "REST", 위키피디아(https://ko.wikipedia.org/wiki/REST)
- "당신의 API가 Restful 하지 않은 5가지 증거", 2013.03.21, [개인페이지](https://beyondj2ee.wordpress.com/2013/03/21/%EB%8B%B9%EC%8B%A0%EC%9D%98-api%EA%B0%80-restful-%ED%95%98%EC%A7%80-%EC%95%8A%EC%9D%80-5%EA%B0%80%EC%A7%80-%EC%A6%9D%EA%B1%B0/)
- "REST API 제대로 알고 사용하기", 2016.07.25, NHN TOAST Meetup(https://meetup.toast.com/posts/92)