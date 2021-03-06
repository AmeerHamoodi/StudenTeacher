import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

//pages
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import Classes from "./pages/Classes.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home></Home>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/signup">
                    <Signup></Signup>
                </Route>
                <Route path="/classes">
                    <Classes></Classes>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default App;