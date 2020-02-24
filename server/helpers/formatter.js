class Formatter {

  static validationErrorFormat(object){
    let error = []
    let objError = {}
    for(let i = 0; i < object.length; i++){
      let key = object[i].path
      objError[key] = object[i].message
    }

    return objError
  }

}

module.exports = Formatter