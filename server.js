require("dotenv").config();
const express = require("express");
const session = require("express-session");
const { Sequelize } = require("sequelize");
const { v4: uuidv4 } = require('uuid');
const cors = require("cors");

const app = express();
const server = require("http").createServer(app);

const sequelize = new Sequelize("profly", "root", "", {
    host: "localhost",
    dialect: "mysql"
});
module.exports = sequelize;

//app.use(cors);
app.use(express.json());
app.get("/", (req, res) => {
    res.redirect("/home")
})
app.use(express.static(__dirname + "/public"));
app.use(session({
    secret: process.env.SESSION,
    cookie: {},
    genid: () => uuidv4(),
    resave: false,
    saveUninitialized: true
}));

/*
Authentication
*/
const passportConfig = require("./auth/passport.config");
const verify = require("./auth/verifySession");

app.use(passportConfig.initialize());

/*
Routes
*/
const router = require("./routes/index");
app.use(router);

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/login")
})


app.get(["/home", "/classes", "/createClass", "/viewClass", "/createMeeting", "/viewClass/*"], (req, res, next) => {
    if (typeof req.session.loggedIn !== "undefined") {
        const data = verify(req.session.loggedIn);

        if (!data) {
            res.status(403).redirect("/login");
        }
    } else {
        res.status(403).redirect("/login");
    }
    next();
})

app.get(["/login", "/signup"], (req, res, next) => {
    if (typeof req.session.loggedIn !== "undefined") {
        const data = verify(req.session.loggedIn);

        if (data) {
            res.status(200).redirect("/home");
        }
    }
    next();
})

server.listen(2000);
console.log("server started")

//SOCKET TIME 

const io = require("socket.io")(server);
const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
    debug: true
})

app.use("/stream_backend", peerServer);
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

const User = require("./sockets/User");
const users = {};

io.on("connection", socket => {
    console.log("Connection");
    socket.id = uuidv4();

    users[socket.id] = new User(socket);
    socket.broadcast.emit("new_user", socket.id);

    socket.on("disconnect", () => {
        console.log("Disconnect", users[socket.id].peer_id)
        socket.broadcast.emit("disconnect_peer", users[socket.id].peer_id)
        delete users[socket.id];
    });

    socket.on("peer_open", (id) => {
        users[socket.id].peer_id = id;
        socket.broadcast.emit("room_connection", id);
    })
});