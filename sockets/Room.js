class Room {
    constructor(id, host) {
        this.users = [];
        this.id = id;
        this.host = host;
    }
}

module.exports = Room;