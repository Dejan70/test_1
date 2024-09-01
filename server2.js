var sql = require("./server.js");

sql.b();

var a = function a(){
    
var http = require('http');
var querystring = require('querystring');

//var server = http.createServer().listen(3000);
var server = http.createServer().listen(21);  //DigitalOcean
var server = http.createServer().listen(1882);  //OliMih

server.on('request', function (req, res) {
    if (req.method == 'POST') {
        var body = '';
    }

    req.on('data', function (data) {
        body += data;
    });

    req.on('end', function () {

        console.log("body: ",body);
      //  typeof(post)
      let ggg=typeof(body);
        console.log("body: ",ggg);
     //  let ww =JSON.parse(body)
    // let oo =JSON.parse(body)   let gg= ff.slice(0,-2);
   // let oo =body.slice(0,-1);
   let oo =body;
    console.log("oo : ",oo);
    let am =JSON.parse(oo);
    console.log("am: ",am)
    console.log("am.name: ",am.name)







        var post = querystring.parse(body);
        console.log("post_new: ",post);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World_server\n');
        sql.b(post);
        function fn1 (m) {
          //  alert();
          m=4;
        }
    });
});

console.log('Listening on port 1882- api');

};
//export function add(a, b) {
    //return a + b;
//  }
module.exports.a = a;
//export function f1() {a=2}

  
