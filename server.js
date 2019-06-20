const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const passport = require("passport");

require("./config");
require("./config/passport")(passport);

// for handlebars
app.use(express.static("public"));
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// body parsing so we can get data from forms
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

app.listen(PORT, console.log(`listenging on port ${PORT}`));
