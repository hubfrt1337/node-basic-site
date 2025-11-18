const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    contentType = 'text/html'
    let path = `/`;
    let r = req.url
    switch (true) {
        case r === '/':
            path += `index.html`
            break;
        case r === '/about':
            path += `about.html`
            break;
        case r === '/contact-me':
            path += `contact-me`;
            break;
        case r.endsWith(".css"):
            path += 'styles.css';
            contentType = 'text/css';
            break;
        default:
            path += '404.html';
            break;
    }
    res.setHeader('Content-type', contentType)
    fs.readFile(`./${path}`, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.write(data)
            res.end()
        }
    })
   
})
server.listen(8000, 'localhost', () => {
    console.log('listen on the port 8000')
})