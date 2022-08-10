//middleware function that authguard the routes from bypass (someone trying to link directly to the page to circumvent login)
const withAuth = (req, res, next) => {
    //checks for the existence of a session property and redirects using res.redirect() if it's not there.
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;