var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

http.createServer(function (request, response) {
    //1번내용
    // //readFile : 파일을 읽겠다. 읽은값은 뒤 함수의 data로, 읽다가 에러나면 error로 들어감
    // fs.readFile('./html/test_res.html', function(error, data) {
    //     if(error) {
    //         console.log(error.message);
    //     }
    //     else {
    //         response.writeHead(200, {'Content-Type':'text/html'});
    //         response.end(data);
    //     }
    // });

    //2번 이미지파일 사용
    // fs.readFile('./img/dog.jpg', function(error, data) {
    //     if(error) {
    //         console.log(error.message);
    //     }
    //     else {
    //         response.writeHead(200, {'Content-Type':'image/jpeg'});
    //         response.end(data);
    //     }
    // });

    //3번 페이지이동
    // response.writeHead(302, {'Location':'https://cs.dongduk.ac.kr'});
    // response.end();

    //4번 다양한 페이지 접근
    // var pathName = url.parse(request.url).pathname;
    // if(pathName == '/') {
    //     fs.readFile('./html/index.html', function(error, data) {
                
    //         response.writeHead(200, {'Content-Type':'text/html'});
    //         response.end(data);
                
    //     });
    // }
    // else if(pathName == '/second') {
    //     fs.readFile('./html/second.html', function(error, data) {
                
    //         response.writeHead(200, {'Content-Type':'text/html'});
    //         response.end(data);
                
    //     });
    // }
    // else if(pathName == '/cs') {
    //     response.writeHead(302, {'Location':'https://cs.dongduk.ac.kr'});
    //     response.end();
    // }

    //5번 get 방식
    // var query = url.parse(request.url, true).query;
    // response.writeHead(200, {'Content-Type':'text/html'});
    // response.end('<h1>' + JSON.stringify(query) + '</h1>');
 
    //6번 post방식
    // if(request.method == 'GET') {
    //     fs.readFile('./html/login.html', function (error, data) {
    //         response.writeHead(200, {'Content-Type':'text/html'});
    //         response.end(data);
    //     });
    // }
    // else if(request.method == 'POST') {
    //     request.on('data', function(data) {
    //         response.writeHead(200, {'Content-Type':'text/html'});
    //         response.end('<h1>' + data + '</h1>');        
    //     });
    // }

    //실습
    if(request.method == 'GET') {
        fs.readFile('./html/login.html', function (error, data) {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        });
    }
    else if(request.method == 'POST') {
        request.on('data', function(data) {
            var text = "";
            text += data;
            var parsedStr = querystring.parse(text, '&', '=');
            console.log(parsedStr.id);
            console.log(parsedStr.pwd);
            
            if(parsedStr.id == parsedStr.pwd) {
                response.writeHead(302, {'Location':'https://cs.dongduk.ac.kr'});
                response.end();
            }
            else {
                fs.readFile('./html/login_failed.html', function (error, data) {
                    response.writeHead(200, {'Content-Type':'text/html'});
                    response.end(data);
                }); 
            }
               
        });
    }

}).listen(1234, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1234');
