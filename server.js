const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('.'))
app.get('/', function(request, response){
    response.sendFile('index.html')
})
app.listen(port)