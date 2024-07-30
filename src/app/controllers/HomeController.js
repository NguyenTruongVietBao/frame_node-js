class NewsController{

    // [GET] /
    home(req, res){
        res.render('home')
    }
}

module.exports = new NewsController;
