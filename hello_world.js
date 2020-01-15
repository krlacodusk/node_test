//기존 모듈을 씀
var http = require ('http')

//http서버를 만들고 바로 동작시켜라(리슨)
//매개변수로 함수를 쓸 수 있다. createServer에서 필요할때 내부적으로 호출됨=>콜백함수
//함수는 요청이 들어왔을때 처리하는 부분으로 이벤트핸들러 역할을 하는 콜백함수임
//req : 요청할때 정보,  res : 응답정보
// 함수를 쓰는건 createServer의 규칙임
http.createServer(function handler(req, res) {
    //헤더정보
    res.writeHead (200, {'Content-type': 'text/html'});

    //출력
    res.write('<h1> Sever Test</h1>')
    
    //마지막부분에 쓸거
    res.end('Hello world!\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337'); 