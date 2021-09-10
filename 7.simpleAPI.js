const http = require("http");
const { data } = require("./8.API");


http.createServer((req, res) => {
    res.writeHead(200, { "Contest-Type": "application\json" });
    res.write(JSON.stringify(data));
    res.end();
}).listen(3006);