let express = require('express')
let app = express()
app.get('/index.html', function(req, res) {
    res.send("I love javascript!")
})
app.listen(3200)