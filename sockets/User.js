class User {
    constructor(socket) {
        this.username = "test";
        this.id = socket.id;
        this.socket = socket;
        this.peer_id = null;
        this._init();
    }
    _init() {
        this.socket.emit("ID", this.id);
    }
};

module.exports = User;