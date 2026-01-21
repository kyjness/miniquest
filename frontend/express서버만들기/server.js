// server.js
const express = require("express");   // express 라이브러리 불러오기
//require = Node.js에서 다른 모듈(라이브러리) 불러오는 문법(CommonJS)
const path = require("path");         // 경로 처리를 도와주는 Node 기본 모듈
const app = express();                // 서버 앱 객체 생성

// "/" 주소로 요청이 들어오면 index.html을 보내주기
app.get("/", (req, res) => {
  // __dirname: 현재 이 server.js 파일이 있는 폴더의 "절대경로" 자동 생성 변수
  const filePath = path.join(__dirname, "index.html");
  res.sendFile(filePath);
});

// 서버를 3000번 포트에서 실행
app.listen(3000, () => {
  console.log("서버 실행 중! 브라우저에서 http://localhost:3000 접속해보세요.");
});
