const { DataTypes } = require("sequelize");
const seq = require("../server");

const Classes = seq.define("classes", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    owner: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: "unique_thing"
    },
    users: {
        type: DataTypes.STRING,
        allowNull: true
    },
    learning_sess: {
        type: DataTypes.STRING,
        allowNull: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = Classes;