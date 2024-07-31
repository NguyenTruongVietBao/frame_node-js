const User = require ('../models/User')
const  {multipleMongooseToObject} = require('../../utils/mongoose')
class NewsController{
    // [GET] /
    // get all user
    home(req, res, next){
        User.find({})
            .then(users => {
                res.render(('pages/home/home'), {
                    users: multipleMongooseToObject(users)
                })
            })
            // .then(users => res.json(users))
            .catch(next)
    }
}

module.exports = new NewsController;
