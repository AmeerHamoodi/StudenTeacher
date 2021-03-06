const User = require("../models/User");

const passport = require("passport");
const { ExtractJwt } = require("passport-jwt");

const JWTStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local").Strategy;

let options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TOKEN
};

const authStrat = new JWTStrategy(options, async(payload, next) => {
    console.log("Jwt got");

    try {
        const user = await User.findOne({ where: { id: payload.id } });
        if (user) {
            next(null, user);
        }
    } catch (e) {
        next(null, false);
    }
});

const localStrat = new LocalStrategy({ usernameField: "username", passwordField: "password" }, async(username, password, done) => {
    try {
        console.log("Start")
        const user = await User.findOne({ username: username, password: password });
        if (!user) return done(null, false);
        if (!user.validatePassword(password)) return done(null, false);
        console.log(user);
        return done(null, user);
    } catch (e) {
        return done(e);
    }

})

passport.use(authStrat);
passport.use(localStrat);

module.exports = passport;