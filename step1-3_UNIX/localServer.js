// http 모듈 불러오기 
var http = require('http');
// fs 모듈 불러오기(로컬파일을 활용할 수 있는 모듈)
var fs = require('fs');
// http 모듈의 메소드를 통해 서버생성 
// 콜백함수의 인자로sever request, response 를 받음 
var app = http.createServer(function(request,response){
  // 서버 request를 받아 url 변수에 저장
    var url = request.url;
  // 서버 리퀘스트 url 경우에 따라 파일 불러올 파일 or server response 지정   
    if(request.url == '/') {
        url = '/index.html';
    }
    if(request == "/hello.html"){
        url = "/hello.html";
    }
    if(request.url == '/favicon.ico'){
      // 특정 상황에 404 처리하여 서버오류로 서버가 죽지 않도록 함 
        return response.writeHead(404);
    }
    if(request.url == '/seldev.html'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    // end 는 출력할 내용을 argument로 받음, filesystem 에 url 정보를 전달하여 가져옴
    response.end(fs.readFileSync(__dirname + url));
})
// http 모듈의 listen 에 대하여 조사필요 
app.listen(3000);
