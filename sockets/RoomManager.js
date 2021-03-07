const Room = require("./Room");
const { v4: uuidv4 } = require('uuid');

const RoomManager = {
    rooms: {},
    newRoom(host = null, id) {
        const room = new Room(id);
        RoomManager.rooms[id] = room;
    },
    getRoom(id) {
        return RoomManager.rooms[id];
    }
}

module.exports = RoomManager;