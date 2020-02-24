class Formatter {

  static validationErrorFormat(object){
    let error = []

    for(let i = 0; i < object.length; i++){
      let objError = {}
      objError[object[i].path] = object[i].message
      error.push(objError)
    }

    return error
  }

}

module.exports = Formatter