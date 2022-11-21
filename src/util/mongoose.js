module.exports = {
    mutipleMongooseToObject : function(mongooes) {
        return mongooes.map((e) => e.toObject() )
    } ,
    MongooseToObject : function(mongooes) {
        return mongooes ? mongooes.toObject() : mongooes ;
    }
}