import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <div>Home</div>
                </Route>
                <Route path="/login">
                    <div>Login</div>
                </Route>
                <Route path="/signup">
                    <div>Signup</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default App;