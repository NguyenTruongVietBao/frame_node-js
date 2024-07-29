const express = require('express')
const app = express()
const port = 8080
const database = require('./config/database')

// connect db
database.connect();

app.get('/', (req, res) => {
    res.send('Hello World !')
})

app.listen(port, () => {
    console.log(`App listening successfully on port ${port}`)
})