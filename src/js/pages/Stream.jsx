import React, {useEffect} from "react";
import init from "../sockets/index";
import ControlButtons from "../components/stream/ControlButtons.jsx";
import Chat from "../components/stream/Chat.jsx";


const Stream = props => {
    useEffect(() => {
        init();
    }, []);

    return (
        <>
            <Chat></Chat>
            <ControlButtons></ControlButtons>
            <div className="calls" id="calls">
            </div>
        </>
        
    )
};

export default Stream;