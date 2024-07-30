
class NewsController{

    // [GET] /news
    home(req, res){
        res.render('pages/news/news')
    }

    // [GET] /news/technology
    newsTechnology(req, res){
        res.render('pages/news/newsTechnology')
    }

    // [GET] /news/finance
    newsFinance(req, res){
        res.render('pages/news/newsFinance')
    }
}

module.exports = new NewsController;
