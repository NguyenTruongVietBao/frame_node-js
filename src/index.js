const express = require('express')
const handlebars = require('express-handlebars');
const app = express()
const port = 8080
const db = require('./config/database')
const path = require('path')
const route = require('./routes')

// connect db
db.connect();

//template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app/views'))

//route init
route(app);

// app listen
app.listen(port, () => {
    console.log(`App listening successfully on port ${port}`)
})