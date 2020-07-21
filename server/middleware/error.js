function errorHandler(err,req,res,next){
    res.send({'error' : err.message});
}

module.exports = errorHandler;