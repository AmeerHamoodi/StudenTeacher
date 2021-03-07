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

router.get("/rooms/join_room", (req, res) => {
    try {
        if (!req.session.loggedIn) {
            res.status(403).redirect("/login");
        } else {
            const verified = await verifySession(req.session.loggedIn);
            if (!verified) {
                res.status(403).redirect("/login");
            } else {
                const data = req.body;
                const { value, error } = await Schema.validate(data);
                if (!error) {
                    let full = {...data };
                    full.owner = verified.id
                    full.learning_sess = "[]";
                    full.users = `[${verified.id}]`;
                    full.description = typeof value.description !== "undefined" ? value.description : null;
                    await Classroom.create(full);
                    res.status(200).send({ message: "Success!", error: false });
                } else {
                    res.status(500).redirect("/login");
                }
            }
        }
    } catch (e) {
        console.log(e);
        res.status(500).send({ message: "ERROR", error: true });
    }
})