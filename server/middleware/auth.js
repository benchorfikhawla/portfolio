 
module.exports = function(req, res, next) {
    // Your authentication logic here
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.status(401).send('Unauthorized');
    }
  };
  