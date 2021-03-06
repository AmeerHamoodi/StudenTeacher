const User = require("../models/User");
const jwt = require("jsonwebtoken");

const verify = async token => {
    try {
        const data = await jwt.verify(token, process.env.TOKEN);
        const userData = await User.findOne({ where: { id: data.id } });
        return { username: userData.username, id: data.id };
    } catch (e) {
        return false;
    }
};

module.exports = verify;