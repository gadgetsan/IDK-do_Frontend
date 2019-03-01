import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Jumbotron } from "react-bootstrap";

export default function LandingPage(props) {
    let user = JSON.parse(localStorage.getItem("user"));
    return <p>HELLO WORLD! PUBLIC URL: '{process.env.PUBLIC_URL}'</p>;
}
/*
export default class HelloUserPage extends Component {
    render = () => {
        return <h1>HELLO WORLD!</h1>;
    };
}
*/
