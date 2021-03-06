import React, {useState} from "react";
import Classroom from "./Classroom.jsx";

const MyClasses = ({classes}) => {

    let data = [];
    classes.forEach(classItem => {
        data.push(<Classroom ide={classItem.ide} name={classItem.title} description={classItem.description} author={classItem.owner}></Classroom>)
        classes.length > 2 && data.push(<div className="ui vertical segment"></div>)
    })

    return (
        <>
            <div className="ui container bg-white" style={{marginTop: 0}}>
                <div className="ui items">
                    {data}
                </div>
            </div>
        </>
        
    )
};

export default MyClasses;