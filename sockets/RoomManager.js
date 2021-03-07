const Room = require("./Room");
const { v4: uuidv4 } = require('uuid');

const RoomManager = {
    rooms: {},
    newRoom(id) {
        console.log(id);
        const room = new Room(id);
        RoomManager.rooms[id] = room;
    },
    getRoom(id) {
        console.log(RoomManager.rooms);
        return RoomManager.rooms[id];
    },
    removeRoom(id) {
        delete RoomManager.rooms[id]
    }
}

module.exports = RoomManager;