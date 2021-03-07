import React from "react";

import API from "../../api/";

const Form = props => {

    const click = async() => {
        const id = location.href.split("?id=")[1];
        const data = {
            id: id,
            description: $("#form_desc").val(),
            title: $("#form_title").val()
        }
        const res = await API.createMeeting(data);

        if(!res.error) {
            location.href = "/stream?id="+res.message;
        }
    }

    return (
        <form className="ui form margined">
            <div className="field">
                <label>Title</label>
                <input type="text" id="form_title" placeholder="Enter title" />
            </div>
            <div className="field">
                <label>Description</label>
                <textarea rows="2" id="form_desc"></textarea>
            </div>
            <button className="ui positive button" type="button" onClick={click}>Submit</button>
        </form>
    )
};

export default Form;