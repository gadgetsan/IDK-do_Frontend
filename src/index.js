import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./Pages/LoginPage";
import HelloUserPage from "./Pages/HelloUserPage";
import ListPage from "./Pages/ListPage";
import SharesPage from "./Pages/SharesPage";
import DisconnectPage from "./Pages/DisconnectPage";
import RegisterPage from "./Pages/RegisterPage";
import ValidationPage from "./Pages/ValidationPage";
import PasswordForgotPage from "./Pages/PasswordForgotPage";
import PasswordPage from "./Pages/PasswordPage";
import { PrivatePage } from "./Pages/PrivatePage";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import "./styles.css";

function App() {
    return (
        <Router>
            <div>
                <PrivatePage path="/hello" exact component={HelloUserPage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/register" exact component={RegisterPage} />
                <Route path="/Validation" exact component={ValidationPage} />
                <Route path="/ForgotPassword" exact component={PasswordForgotPage} />
                <Route path="/Password" exact component={PasswordPage} />
                <PrivatePage path="/list" exact component={ListPage} />
                <PrivatePage path="/sharedWithMe" exact component={SharesPage} />
                <PrivatePage path="/disconnect" exact component={DisconnectPage} />
            </div>
        </Router>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
