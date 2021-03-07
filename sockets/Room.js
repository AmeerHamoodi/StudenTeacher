class Room {
    constructor(id, host) {
        this.users = [];
        this.id = id;
        this.host = host;
    }
    addUser(user) {
        this.users.push(user);
        user.socket.join(this.id);
        const sock = user.socket;

        this.users.forEach(userItem => {
            if (userItem.socket.id !== sock.id) {
                userItem.socket.emit("new_user", sock.id);
            }
        });


        sock.on("disconnect", () => {
            console.log("Disconnect", sock.peer_id)

            this.users.forEach(userItem => {
                if (userItem.socket.id !== sock.id) {
                    userItem.socket.emit("disconnect_peer", sock.peer_id);
                }
            });
            this.users.splice(this.users.indexOf(this.users.find(obj => obj.id == sock.id)), 1);
        });

        sock.on("peer_open", (id) => {
            sock.peer_id = id;

            this.users.forEach(userItem => {
                if (userItem.socket.id !== sock.id) {
                    userItem.socket.emit("room_connection", sock.peer_id);
                }
            });
        })
    }
}

module.exports = Room;