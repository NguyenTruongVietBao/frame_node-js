const newsRouter = require ('./news')
const homeRouter = require ('./home')

function route(app){
    app.use('/', homeRouter);
    app.use('/news', newsRouter);
}
module.exports = route;