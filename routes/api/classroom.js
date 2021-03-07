const verifySession = require("../../auth/verifySession");
const router = require("express").Router();
const Classroom = require("../../models/Classroom");
const User = require("../../models/User");
const { v4: uuidv4 } = require('uuid');

const RoomManager = require("../../sockets/RoomManager");

const Joi = require("joi");

const Schema = Joi.object({
    title: Joi.string()
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
                    full.owner = verified.id
                    full.learning_sess = "[]";
                    full.users = `[${verified.id}]`;
                    full.description = typeof value.description !== "undefined" ? value.description : null;
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
        if (typeof req.session.loggedIn == "undefined") {
            console.log("log")
            res.status(403).send({ message: "Not authorized", error: true });
        } else {
            const verified = await verifySession(req.session.loggedIn);
            if (!verified) {
                res.status(403).send({ message: "Not authorized", error: true });
            } else {
                const queryRes = await Classroom.findAll();
                let mapped = queryRes.map(item => JSON.parse(item.dataValues.users));
                console.log(mapped)
                let indecies = [];
                mapped.forEach((item, i) => {
                    item.includes(verified.id) && indecies.push(i);
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
                response = response.reverse();
                res.status(200).send({ message: response, error: false })
            }
        }
    } catch (e) {
        console.log(e);
        res.status(500).send({ message: "ERROR", error: true });
    }
});

router.post("/class/get_class_by_id", async(req, res) => {
    try {
        if (typeof req.session.loggedIn == "undefined") {
            console.log("log")
            res.status(403).send({ message: "Not authorized", error: true });
        } else {
            const verified = await verifySession(req.session.loggedIn);
            if (!verified) {
                res.status(403).send({ message: "Not authorized", error: true });
            } else {
                const data = req.body;
                const queryRes = await Classroom.findOne({ where: { id: data.id } });
                const owner = await User.findOne({ where: { id: queryRes.owner } });
                let final = queryRes;
                final.owner = owner.username;
                res.status(200).send({ message: final, error: false })
            }
        }
    } catch (e) {
        console.log(e);
        res.status(500).send({ message: "ERROR", error: true });
    }
});

router.get("/class/join_class", async(req, res) => {
    try {
        if (typeof req.session.loggedIn == "undefined") {
            console.log("log")
            res.status(403).redirect("/login");
        } else {
            const verified = await verifySession(req.session.loggedIn);
            if (!verified) {
                res.status(403).redirect("/login");
            } else {
                const classId = req.query.id;
                if (typeof classId !== "undefined") {
                    const classInfo = await Classroom.findOne({ where: { id: classId } });
                    const users = JSON.parse(classInfo.users);
                    users.push(verified.id);
                    classInfo.users = JSON.stringify(users);
                    await classInfo.save();
                    res.status(200).redirect("/home");
                }
            }
        }
    } catch (e) {
        console.log(e);
        res.status(403).redirect("/login");
    }
});

router.post("/class/remove_class", async(req, res) => {
    try {
        if (typeof req.session.loggedIn == "undefined") {
            console.log("log")
            res.status(403).send({ message: "Not authorized", error: true });
        } else {
            const verified = await verifySession(req.session.loggedIn);
            if (!verified) {
                res.status(403).send({ message: "Not authorized", error: true });
            } else {
                const data = req.body;
                const queryRes = await Classroom.findOne({ where: { id: data.id } });

                if (queryRes.owner != verified.id) {
                    const usersArr = JSON.parse(queryRes.users);
                    usersArr.splice(usersArr.indexOf(verified.id), 1);
                    queryRes.users = JSON.stringify(usersArr);
                    await queryRes.save();

                    res.status(200).send({ message: "Success!", error: false })
                } else {
                    await queryRes.destroy();

                    res.status(200).send({ message: "Success!", error: false })
                }
            }
        }
    } catch (e) {
        console.log(e);
        res.status(500).send({ message: "ERROR", error: true });
    }
});


router.post("/class/create_meeting", async(req, res) => {
    try {
        if (!req.session.loggedIn) {
            res.status(403).send({ message: "Not authorized", error: true });
        } else {
            const verified = await verifySession(req.session.loggedIn);
            if (!verified) {
                res.status(403).send({ message: "Not authorized", error: true });
            } else {
                const data = { title: req.body.title, description: req.body.description };
                const { value, error } = await Schema.validate(data);
                if (!error) {
                    const tempId = uuidv4();
                    const userPerson = await User.findOne({ where: { id: verified.id } });
                    const query = {
                        title: value.title,
                        description: value.description,
                        id: tempId,
                        owner: userPerson.username
                    };
                    const tableData = await Classroom.findOne({ where: { id: req.body.id } });

                    let sess = JSON.parse(tableData.learning_sess);
                    sess.push(query);

                    tableData.learning_sess = JSON.stringify(sess);
                    await tableData.save();

                    RoomManager.newRoom(tempId);

                    res.status(200).send({ message: query.id, error: false });
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

module.exports = router;