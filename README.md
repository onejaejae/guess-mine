# Guess Mine

Realtime Drawing Game Built with NodeJs, SocketIO, Gulp

## To Do :

- [x] Server
- [x] Pug
- [x] Static
- [x] ScocketIO

---

# 학습 내용 키워드

### Http 통신 vs Socket 통신 차이점



📌 HTTP 통신

-   Client가 요청을 보내는 경우에만 Server가 응답하는 단방향 통신이다.

-   Server로부터 응답을 받은 후에는 연결이 바로 종료된다. 

-   실시간 연결이 아니고, 필요한 경우에만 Server로 요청을 보내는 상황에 유용하다.

-   요청을 보내 Server의 응답을 기다리는 어플리케이션(Android or Ios)의 개발에 주로 사용된다

📌   Socket 통신

-   Server와 Client가 계속 연결을 유지하는 양방향 통신이다.

-   Server와 Client가 실시간으로 데이터를 주고받는 상황이 필요한 경우에 사용된다.

-   실시간 동영상, 실시간 채팅, Streaming이나 온라인 게임 등과 같은 경우에 자주 사용된다.

출처 https://mangkyu.tistory.com/48

---

### Socket.io

관련 링크

https://poiemaweb.com/nodejs-socketio

https://velog.io/@ju_h2/Node.js-socket.io%EB%A1%9C-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EC%B1%84%ED%8C%85-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

---

### Gulp

관련 링크

https://haeguri.github.io/2019/03/31/introduction-gulp/

https://darrengwon.tistory.com/504?category=884507

___
### 모듈, 모듈 형식, 모듈 로더 vs 모듈 번들러

참고 자료

https://ayonc.tistory.com/136

###  Browserify

관련 링크

https://kamang-it.tistory.com/entry/ModuleBundlerBrowserifyjs%EB%A5%BC-%ED%95%98%EB%82%98%EC%9D%98-%ED%8C%8C%EC%9D%BC%EB%A1%9C-%EB%AC%B6%EA%B8%B0-browserify%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%82%AC%EC%9A%A9%EB%B2%95?category=771246

https://kamang-it.tistory.com/entry/BuildSystemTaskRunnerGulpGulp-%ED%8C%8C%EC%9D%B4%ED%94%84%EB%9D%BC%EC%9D%B8-%EC%82%AC%EC%9A%A9%EB%B2%95-Gulp%EB%A1%9C-browserify%EB%A5%BC-%EC%8D%A8%EC%84%9C-js%ED%8C%8C%EC%9D%BC%EB%93%A4%EC%9D%84-%ED%95%A9%EC%B3%90%EB%B3%B4%EC%9E%90%EB%B2%88%EB%93%A4%EB%A7%81%ED%95%98%EC%9E%90featgulpbrowserify?category=771246

