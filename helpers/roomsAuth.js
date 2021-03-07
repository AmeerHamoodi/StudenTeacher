const verifySession = require("../../auth/verifySession");
const router = require("express").Router();
const Classroom = require("../../models/Classroom");
const User = require("../../models/User");

const Joi = require("joi");

const Schema = Joi.object({
    title: Joi.string()
        .max(100)
        .required(),
    description: Joi.string()
        .max(400)
});

module.exports = (req, res) => {
    try {
        if (!req.session.loggedIn) {
            res.status(403).redirect("/login");
            return false;
        } else {
            const verified = await verifySession(req.session.loggedIn);
            if (!verified) {
                res.status(403).redirect("/login");
                return false;
            } else {
                const data = req.body;
                const { value, error } = await Schema.validate(data);
                if (!error) {

                    res.status(200);
                    return req.query.id;
                } else {
                    res.status(500).redirect("/login");
                }
            }
        }
    } catch (e) {
        console.log(e);
        res.status(500).redirect("/login");
        return false;
    }
};