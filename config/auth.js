module.exports = {
  ensureAuthenticated: (req, res, next) => {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
      return next();
    }
    // req.flash("error_msg", "Please log in.");
    res.redirect("/users/login");
  }
};
