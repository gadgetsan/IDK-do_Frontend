import React, { Component } from "react";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import helpers from "../helpers";
import IdeaLineView from "../Views/IdeaLineView";
import AddIdeaModalContainer from "../Containers/AddIdeaModalContainer";
import { LinkContainer } from "react-router-bootstrap";

export default class ExperimentsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper ">
                <div className="sidebar" data-color="green" data-background-color="black" data-image="../../assets/img/sidebar-1.jpg">
                    <div className="logo">
                        <a href="http://www.creative-tim.com" className="simple-text logo-normal">
                            IDK-do <small>(Idée Cadeau)</small>
                        </a>
                    </div>
                    <div className="sidebar-wrapper">
                        <ul className="nav">
                            <li className="nav-item  ">
                                <LinkContainer to="/list">
                                    <Nav.Link>
                                        <i className="material-icons">list</i>
                                        <p>Ma Liste</p>
                                    </Nav.Link>
                                </LinkContainer>
                            </li>
                            <li className="nav-item  ">
                                <LinkContainer to="/sharedWithMe">
                                    <Nav.Link>
                                        <i className="material-icons">done</i>
                                        <p>Liste partagées</p>
                                    </Nav.Link>
                                </LinkContainer>
                            </li>
                            <li className="nav-item active-pro ">
                                <LinkContainer to="/disconnect">
                                    <Nav.Link>
                                        <i className="material-icons">power_settings_new</i>
                                        <p>Se Déconnecter</p>
                                    </Nav.Link>
                                </LinkContainer>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-panel">
                    <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                        <div className="container-fluid">
                            <div className="navbar-wrapper">
                                <a className="navbar-brand" href="#pablo">
                                    User Profile
                                </a>
                            </div>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                aria-controls="navigation-index"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="sr-only">Toggle navigation</span>
                                <span className="navbar-toggler-icon icon-bar" />
                                <span className="navbar-toggler-icon icon-bar" />
                                <span className="navbar-toggler-icon icon-bar" />
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" />
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
