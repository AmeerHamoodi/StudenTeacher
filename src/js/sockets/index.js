const io = require("socket.io-client");
const socket = io({
    rejectUnauthorized: false,
    transports: ["polling"]
});

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function() {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

const streams = {};

const init = () => {
    const me = new Peer();
    const peers = {};
    const callList = {};


    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
    }).then(stream => {
        console.log(stream);
        client.addVidToVids(stream, "self")

        me.on("call", call => {
            if (typeof callList[call.peer] == "undefined") {
                console.log(call);
                call.answer(stream)
                call.on("stream", newStream => {
                    console.log(newStream);
                    if (typeof streams[newStream.id] == "undefined") {
                        client.addVidToVids(newStream, call.peer)
                        streams[newStream.id] = newStream;
                        console.log("here");
                    }
                });

                call.on("close", () => {
                    console.log("Close");
                    let loop = document.querySelectorAll('video');

                    for (let i = 0; i < loop.length; i++) {
                        console.log("If you're reading this, you're awesome :)")
                        if (loop[i].id == call.peer) {
                            loop[i].remove();
                        }
                    }
                })
                callList[call.peer] = call;
            }
        })

        socket.on("room_connection", userId => {
            console.log(userId, peers);
            if (typeof peers[userId] == "undefined") {
                client.connectToNewUser(userId, stream)
            }
        });
    })

    socket.on("disconnect_peer", pid => {
        console.log("close")
        if (peers[pid]) peers[pid].close();

    })

    const client = {
        videos: $("#calls"),
        addVidToVids(newStream, id) {
            const video = document.createElement("video");
            video.id = id;
            video.classList.add("presentation_call");
            console.log(video, newStream);
            video.srcObject = newStream;
            video.addEventListener("loadedmetadata", () => {
                video.play();
            });
            console.log(video);
            document.getElementById("calls").appendChild(video);
        },
        connectToNewUser(userId, stream) {
            console.log(userId, stream);
            const call = me.call(userId, stream);

            call.on("stream", videoStream => {
                if (typeof streams[stream.id] == "undefined") {
                    console.log("stream");
                    client.addVidToVids(videoStream, userId);
                    streams[stream.id] = stream;
                }

            })
            call.on("close", () => {
                console.log("Close");
                let loop = document.querySelectorAll('video');

                for (let i = 0; i < loop.length; i++) {
                    console.log("If you're reading this, you're awesome :)")
                    if (loop[i].id == userId) {
                        loop[i].remove();
                    }
                }
            });

            peers[userId] = call
        }
    }

    me.on("open", id => {
        peers[id] = me;
        console.log("OPEN" + id)
        socket.emit("peer_open", id);
    })

};

export default init;