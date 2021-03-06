require("dotenv").config();
const express = require("express");
const { Sequelize } = require("sequelize");
const app = express();

const sequelize = new Sequelize("profly", "root", "", {
    host: "localhost",
    dialect: "mysql"
});
module.exports = sequelize;

app.use(express.json());
app.use(express.static(__dirname + "/public"));

/*
Authentication
*/
const passportConfig = require("./auth/passport.config");
app.use(passportConfig.initialize());

/*
Routes
*/
const router = require("./routes/index");
app.use(router);

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(2000, () => {
    console.log("server started");
});