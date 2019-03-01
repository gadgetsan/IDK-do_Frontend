import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LandingPage(props) {
    let user = JSON.parse(localStorage.getItem("user"));
    return (
        <p>
            Bienvenue sur ce site!
            <br /> <Link to="/login"> Se connecter </Link>
        </p>
    );
}
/*
export default class HelloUserPage extends Component {
    render = () => {
        return <h1>HELLO WORLD!</h1>;
    };
}
*/
