const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    const publicPath = './public';
    let body = null;
    try {
    const body = fs.readFileSync(`${publicPath}${req.url}`)
    } catch (e) {
        console.log(e)
    }
    res.end(body)

})


const port = process.env.PORT || 3000
server.listen(port)

console.log('Started on port ' + port)
