import React from "react";

import NavBar from "../components/NavBar.jsx";
import MyClasses from "../components/home/MyClasses.jsx";

const Home = props => {
    return (
        <>
            <NavBar active="home"></NavBar>
            <h1 style={{textAlign: "center", marginBottom: 0}}>My classes:</h1>
            <MyClasses></MyClasses>
        </>
    )
};

export default Home;