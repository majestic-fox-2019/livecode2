'use strict';

module.exports = (err, req, res, next) => {
  if (err) {
    switch (err.name) {
      case 'SequelizeValidationError':
        res.status(400).json({ errors: err, message: err.message });
        break;
    
      default:
        res.status(err.status || 500).json({ message: err.message || 'Internal server error!' });
        break;
    }
  }
};
