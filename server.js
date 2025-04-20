const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
var http = require('http');

// const cors = require("cors"); // CORS 미들웨어 임포트

// 현재폴더 에서 정적 파일 제공

// app.use(cors());  // 모든 도메인에서의 요청을 허용

app.use(express.static(path.join(__dirname)));




// HTML 파일을 루트 URL에서 제공
app.get('/survey2', (req, res) => {
    res.sendFile(path.join(__dirname, 'survey2.html'));
  });

  var httpServer = http.createServer(function (request, response) {
    // Setting up Headers
    response.setHeader('Access-Control-Allow-origin', 'http://localhost:3000/survey2'); // 모든 출처(orogin)을 허용
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // 모든 HTTP 메서드 허용
    response.setHeader('Access-Control-Allow-Credentials', 'true'); // 클라이언트와 서버 간에 쿠키 주고받기 허용

    // ...

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('ok');
});




// 서버 실행
app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
