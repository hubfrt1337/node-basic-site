const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
console.log('request')
res.setHeader('Content-type', 'text/html')
console.log(req.url)
let path = `/`;
switch(req.url){
    case '/': 
    path += `index.html`
    break;
    case '/about':
    path += `about.html`
    break;
    case '/contact-me':
    path += `contact-me`;
    break;
    default: 
    path += '404.html';
    break;
}
fs.readFile(`./${path}`, (err, data) => {
    if(err) {
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