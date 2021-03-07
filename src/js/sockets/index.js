const io = require("socket.io-client");

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function() {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

const streams = {};

const init = () => {
    const socket = io("/stream", {
        rejectUnauthorized: false,
        transports: ["polling"]
    });
    const me = new Peer();
    const peers = {};
    const callList = {};


    const room = location.href.split("?id=")[1];
    const classId = localStorage.getItem("class_id");
    console.log(classId);
    let MEDIA;
    socket.emit("room", { room: room, id: classId });

    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
    }).then(stream => {
        MEDIA = stream;
        console.log(stream);
        client.addVidToVids(stream, "self")

        me.on("call", call => {
            if (typeof callList[call.peer] == "undefined") {
                console.log(streams);
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
        console.log("close");
        document.getElementById(pid).remove();
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
                console.log(videoStream)
                if (typeof streams[videoStream.id] == "undefined") {
                    console.log("stream");
                    client.addVidToVids(videoStream, userId);
                    streams[videoStream.id] = stream;
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
    });

    socket.on("close", () => {
        alert("Presentation closed");
        location.href = "/home";
    });

    //UI STUFF
    $("#microphone").click(() => {
        MEDIA.getAudioTracks()[0].enabled = !MEDIA.getAudioTracks()[0].enabled;
        const en = MEDIA.getAudioTracks()[0].enabled;
        if (en) {
            $("i.microphone").attr("class", "big microphone icon").css("opacity", "1");
        } else {
            $("i.microphone").attr("class", "big microphone slash icon").css("opacity", "0.3");
        }
    });
    $("#video").click(() => {
        MEDIA.getVideoTracks()[0].enabled = !MEDIA.getVideoTracks()[0].enabled;
        const en = MEDIA.getVideoTracks()[0].enabled;
        if (en) {
            $("i.video").css("opacity", "1")
        } else {
            $("i.video").css("opacity", "0.3")
        }
    })

};

export default init;