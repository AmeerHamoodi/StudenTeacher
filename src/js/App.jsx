import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

//pages
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import Classes from "./pages/Classes.jsx";
import ViewClass from "./pages/ViewClass.jsx";
import CreateMeeting from "./pages/CreateMeeting.jsx";
import CreateClass from "./pages/CreateClass.jsx";
import Logout from "./pages/Logout.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" exact>
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
                <Route path="/viewClass=:classId" render={props => <ViewClass {... props}></ViewClass>}>
                    
                </Route>
                <Route path="/createMeeting">
                    <CreateMeeting></CreateMeeting>
                </Route>
                <Route path="/createClass">
                    <CreateClass></CreateClass>
                </Route>
                <Route path="/logout">
                    <Logout></Logout>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default App;