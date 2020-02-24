function errorHandler(err, req, res, next){
  if(err.name === "SequelizeValidationError"){
    res.status(400).json({
      "errors": err.message,
      "message": "SequelizeValidationError"
    })
  }if(err.name === "notfound"){
    res.status(404).json({
      "errors": err.name,
      "message": "Not Found"
    })
  }else{
    res.status(500).json({
      "errors": [],
      "message": "..."
    })
  }
  
}
module.exports  = errorHandler