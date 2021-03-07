import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";

ReactDOM.render(<App></App>, document.getElementById("app"));

window.alert = (message, type="") => {
    const el = document.createElement("div");
    el.classList.add("ui");
    el.classList.add("top_fix");
    const close = document.createElement("i");
    close.classList.add("close");
    close.classList.add("icon");

    const head = document.createElement("div");
    head.classList.add("header");

    if(type == "error") {
        head.innerText = "ERROR:";
        el.classList.add("negative");
        el.classList.add("message");
    } else {
        head.innerText = "Message"
        el.classList.add("message");
    }

    const p = document.createElement("p");
    p.innerText = message;

    el.append(close)
    el.append(head);
    el.append(p);

    document.body.appendChild(el);
    document.body.style.overflow = "hidden";

    $('.message .close') .on('click', function() {
        $(this)
            .closest('.message')
            .transition('fade');
            document.body.classList.style.overflow = "auto";
        });
}
