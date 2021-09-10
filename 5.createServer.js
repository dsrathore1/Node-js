const http = require("http");


const data = (res, req) => {
    req.write("<h1>Hello Brother, finally I created My first server on node js");
    req.end();
}

http.createServer(data).listen(3522);