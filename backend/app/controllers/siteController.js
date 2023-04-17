
const Pet = require('../models/pet');
const { multipleMongooseToObject } = require('../utils/mongoose');


class siteController{
    index(req, res, next){
        Pet.find({})
            .then(pets =>{
                res.send({pets: multipleMongooseToObject(pets)})
            })
            .catch(next)
    }
}

module.exports = new siteController;
