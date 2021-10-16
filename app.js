const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const path = require('path');

const app = express();

// View engine setup
app.engine("hbs", exphbs());
app.set("view engine", "hbs");
app.set('views', path.resolve(__dirname, 'views'));

//static folder
app.use('/public', express.static(path.join(__dirname, "public")));

//body-parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('contact');
});

app.listen(2021, () => {
    console.log("Server started!!");
});
