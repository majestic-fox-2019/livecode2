function errorHandler(err, req, res, next){
  if(err.name === "SequelizeValidationError"){
    res.status(400).json({
      "errors": err.message,
      "message": "SequelizeValidationError"
    })
  }else{
    res.status(500).json({
      "errors": [],
      "message": "..."
    })
  }
  
}
module.exports  = errorHandler