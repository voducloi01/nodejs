
const Course = require('../models/Course')
const {mutipleMongooseToObject} =  require('../../util/mongoose')
class NewController {

    index(req , res , next) {
      Course.find({})
      .then(courses => {   
        res.render('news' , {courses : mutipleMongooseToObject(courses)})
      })
      .catch(error => next(error));

    }
}

module.exports = new NewController ;