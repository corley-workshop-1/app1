const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!!!!!!'))

app.listen(process.env.NODE_PORT || 4000);

module.exports = app
