const errorMiddleware = (err,req,res,next) =>{
    console.log('here is the error middleware')
    res.json({message:error.message})

}

module.exports = errorMiddleware