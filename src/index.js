import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./Pages/LoginPage";
import HelloUserPage from "./Pages/HelloUserPage";
import LandingPage from "./Pages/LandingPage";
import ListPage from "./Pages/ListPage";
import SharesPage from "./Pages/SharesPage";
import DisconnectPage from "./Pages/DisconnectPage";
import RegisterPage from "./Pages/RegisterPage";
import ValidationPage from "./Pages/ValidationPage";
import PasswordForgotPage from "./Pages/PasswordForgotPage";
import PasswordPage from "./Pages/PasswordPage";
import ExperimentsPage from "./Pages/ExperimentsPage";
import { PrivatePage } from "./Pages/PrivatePage";
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";

import "./styles.css";

//console.log("Public URL: " + process.env.PUBLIC_URL);

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div>
                <PrivatePage path="/hello" exact component={HelloUserPage} />
                <Route path="/" exact component={LandingPage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/register" exact component={RegisterPage} />
                <Route path="/Validation" exact component={ValidationPage} />
                <Route path="/ForgotPassword" exact component={PasswordForgotPage} />
                <Route path="/Password" exact component={PasswordPage} />
                <Route path="/Experiments" exact component={ExperimentsPage} />
                <PrivatePage path="/list" exact component={ListPage} />
                <PrivatePage path="/sharedWithMe" exact component={SharesPage} />
                <PrivatePage path="/disconnect" exact component={DisconnectPage} />
            </div>
        </Router>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
