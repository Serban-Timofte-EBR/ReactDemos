const http = require('http');

const server  = http.createServer((req, res) => {
    console.log('headers', req.headers);
    console.log('methods ', req.method);
    console.log('url ',req.url);

    const user = {
        name: 'user',
        hobby: 'tennis'
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(user));

    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});

server.listen(3000);
