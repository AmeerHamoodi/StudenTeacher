const Room = require("./Room");
const { v4: uuidv4 } = require('uuid');

class RoomManager {
    constructor() {
        this.rooms = [];
    }
    newRoom(host) {
        const room = new Room(uuidv4());
        room.join
    }
}