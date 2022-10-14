const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log(req.url)
  // const body = req.url === '/styles.css'
  //   ? fs.readFileSync('./public/styles.css')
  //   : fs.readFileSync('./public/index.html')

  const publicPath = './public'

  let body = null
  try {
    body = fs.readFileSync(`${publicPath}${req.url}`)
  } catch (e) {
    console.log(e)
    body = fs.readFileSync(`${publicPath}/index.html`)
  }

  res.end(body)
})


const port = process.env.PORT || 3000
server.listen(port)

console.log(`Server started on port ${port}!`)