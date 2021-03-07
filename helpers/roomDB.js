const Classroom = require("../models/Classroom");

module.exports = async(room_id, class_id) => {
    const getClass = await Classroom.findOne({ where: { id: class_id } });
    const sess = JSON.parse(getClass.learning_sess);
    let indexToSplice = 0;
    sess.forEach((i, item) => {
        if (item.id == room_id) {
            indexToSplice = i;
        }
    });

    sess.splice(indexToSplice, 1);

    getClass.learning_sess = JSON.stringify(sess);
    await getClass.save();
};