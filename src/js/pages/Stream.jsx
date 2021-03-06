import React, {useEffect} from "react";
import init from "../sockets/index";


const Stream = props => {
    useEffect(() => {
        init();
    }, []);

    return (
        <div className="calls" id="calls">
        </div>
    )
};

export default Stream;