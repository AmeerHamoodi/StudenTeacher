import React from "react";

const Chat = () => {
    return (
        <div className="side_chat" style={{display: "none"}}>
            <div style={{position: "relative", height: "100%"}}>
                <ul id="chat">
                </ul>
                <div className="ui grid" id="down" style={{width: "100%", marginLeft: "20px"}}>
                    <div className="ten wide column ui input" style={{display: "flex"}}>
                        <input type="text" placeholder="Enter chat message and hit enter" id="text_chat" />
                    </div>
                    <div className="six wide column">
                        <button className="ui primary button" id="send_message">Send</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
};
export default Chat;