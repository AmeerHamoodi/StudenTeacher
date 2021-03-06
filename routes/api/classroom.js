const verifySession = require("../../auth/verifySession");
const router = require("express").Router();
const Classroom = require("../../models/Classroom");
const User = require("../../models/User");

const Joi = require("joi");

const Schema = Joi.object({
    title: Joi.string()
        .alphanum()
        .max(100)
        .required(),
    description: Joi.string()
        .max(400)
})


router.post("/class/create_class", async(req, res) => {
    try {
        if (!req.session.loggedIn) {
            res.status(403).send({ message: "Not authorized", error: true });
        } else {
            const verified = await verifySession(req.session.loggedIn);
            if (!verified) {
                res.status(403).send({ message: "Not authorized", error: true });
            } else {
                const data = req.body;
                const { value, error } = await Schema.validate(data);
                if (!error) {
                    let full = {...data };
                    full.owner = await User.findOne({ where: { id: 1 } });
                    full.learning_sess = "[]";
                    await Classroom.create(full);
                    res.status(200).send({ message: "Success!", error: false });
                } else {
                    res.status(500).send({ message: error.details[0].message, error: true });
                }
            }
        }
    } catch (e) {
        console.log(e);
        res.status(500).send({ message: "ERROR", error: true });
    }
});

router.post("/class/get_self_classes", async(req, res) => {
    try {
        if (!req.session.loggedIn) {
            res.status(403).send({ message: "Not authorized", error: true });
        } else {
            const verified = await verifySession(req.session.loggedIn);
            if (!verified) {
                res.status(403).send({ message: "Not authorized", error: true });
            } else {
                const queryRes = await Classroom.findAll();
                let mapped = queryRes.map(item => JSON.parse(item.dataValues.users));

                let indecies = [];
                mapped.forEach((item, i) => {
                    item == 1 && indecies.push(i);
                });

                let response = [];

                for (let i = 0; i < indecies.length; i++) {
                    let index = indecies[i];
                    const data = queryRes[index].dataValues;
                    const owner = await User.findOne({ where: { id: data.owner } });
                    response.push({
                        owner: owner.dataValues.username,
                        title: data.title,
                        description: data.description,
                        id: data.id
                    });
                }
                console.log(response);
                res.status(200).send({ message: response, error: false })
            }
        }
    } catch (e) {
        console.log(e);
        res.status(500).send({ message: "ERROR", error: true });
    }
})

module.exports = router;