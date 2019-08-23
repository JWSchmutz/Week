const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");

require("./config");
require("./config/passport")(passport);

// for handlebars
app.use(express.static("public"));
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// body parsing so we can get data from forms
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});

// Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use(require("./routes/aboutus"));
app.use(require("./routes/whyHDX"));
app.use(require("./routes/product"));

app.listen(PORT, console.log(`listenging on port ${PORT}`));


