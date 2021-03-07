const RoomManager = require("./RoomManager");

class Room {
    constructor(id, classId) {
        this.users = [];
        this.id = id;
        this.host = "not found";
        this.classId = classId;
    }
    addUser(user) {
        if (this.host == "not found") {
            this.host = user;
        }
        this.users.push(user);
        user.socket.join(this.id);
        const sock = user.socket;

        this.users.forEach(userItem => {
            if (userItem.socket.id !== sock.id) {
                userItem.socket.emit("new_user", sock.id);
            }
        });


        sock.on("disconnect", () => {
            console.log("Disconnect", sock.peer_id);

            if (sock.id == this.host.id) {
                this.users.forEach(userItem => {
                    if (userItem.socket.id !== sock.id) {
                        userItem.socket.emit("close");
                    }
                });
            } else {
                this.users.forEach(userItem => {
                    if (userItem.socket.id !== sock.id) {
                        userItem.socket.emit("disconnect_peer", sock.peer_id);
                    }
                });
                this.users.splice(this.users.indexOf(this.users.find(obj => obj.id == sock.id)), 1);
            }
        });

        sock.on("peer_open", (id) => {
            sock.peer_id = id;

            this.users.forEach(userItem => {
                if (userItem.socket.id !== sock.id) {
                    userItem.socket.emit("room_connection", sock.peer_id);
                }
            });
        })

        return this.host.id == user.id;
    }
}

module.exports = Room;