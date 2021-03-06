const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Schema = require("../../auth/valid");
const User = require("../../models/User");

router.post("/auth/login", async(req, res) => {
    const data = req.body;
    console.log(data);
    try {
        const user = await User.findOne({ where: { username: data.username } });

        if (!user) {
            res.status(403).send({ message: "Username or password is incorrect", error: true });
            return 0;
        }
        const resultCompare = await bcrypt.compare(data.password, user.password);

        if (!resultCompare) {
            res.status(403).send({ message: "Username or password is incorrect", error: true });
            return 0;
        }

        const token = await jwt.sign({ id: user.id }, process.env.TOKEN);

        res.status(200).send({ message: token, error: false });
    } catch (e) {
        res.status(500).send({ message: "Error", error: true });
    }

});

router.post("/auth/signup", async(req, res) => {
    const data = req.body;
    if (data.username && data.password) {
        const { value, error } = await Schema.validate(data);

        if (typeof error !== "undefined") {
            console.log(error.details[0].message);
            res.send({ message: error.details[0].message, error: true });
            return 0;
        } else {
            try {
                const newPsw = await bcrypt.hash(value.password, 10);
                const userValue = await User.create({ username: value.username, password: newPsw });
                const token = await jwt.sign({ id: userValue.id }, process.env.TOKEN);

                res.status(200).send({ message: token, error: false })
            } catch (e) {
                res.status(500).send({ message: "Error", error: true });
            }
        }
    }
});

module.exports = router;