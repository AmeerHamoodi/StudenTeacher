import React from "react";
import API from "../../api";

const Form = props => {
    const clickback = async () => {
        const data = {
            title: $("#form_title").val(),
            description: $("description").val()
        };
        const response = await API.createClassroom(data);
        if(!response.error) {
            alert(response.message);
            location.href = "/home";
        } else {
            alert("ERROR :" + response.message);
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
            <button className="ui positive button" type="button" onClick={clickback}>Submit</button>
        </form>
    )
};

export default Form;