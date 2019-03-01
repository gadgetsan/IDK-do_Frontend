import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card } from "react-bootstrap";

import "../Login.css";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    login(userInfo) {
        localStorage.setItem("user", JSON.stringify(userInfo));
    }

    logout() {
        localStorage.removeItem("user");
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        window
            .fetch("https://6jnnzjwmkk.sse.codesandbox.io/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: this.state.email, password: this.state.password })
            })
            .then(res => {
                res.text()
                    .then(text => {
                        if (res.status === 401) {
                            // auto logout if 401 response returned from api
                            this.logout();
                            window.location.reload(true);
                        } else {
                            //on ajoute le password pour l'avoir plus tard
                            var userData = JSON.parse(text);
                            userData.password = this.state.password;
                            this.login(userData);
                            this.props.history.push("/hello");
                            //this.props.location = "/hello";
                        }
                    })
                    .catch(err => {
                        console.error("ERROR WHEN READING STREAM: " + err.message);
                    });
            })
            .catch(function(err) {
                console.error("ERR: " + err.message);
            });
    };

    render = () => {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg="5">
                        <Card className="card-profile">
                            <Card.Header className="card-header-primary">
                                <Card.Title>Se connecter</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="Login">
                                    <form onSubmit={this.handleSubmit}>
                                        <FormGroup controlId="email" bssize="large">
                                            <FormLabel>Courriel</FormLabel>
                                            <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange} />
                                        </FormGroup>
                                        <FormGroup controlId="password" bssize="large">
                                            <FormLabel>Mot de Passe</FormLabel>
                                            <FormControl value={this.state.password} onChange={this.handleChange} type="password" />
                                        </FormGroup>
                                        <Button block bssize="large" disabled={!this.validateForm()} type="submit">
                                            Connexion
                                        </Button>
                                    </form>
                                    <a className="btn btn-link btn-danger pull-right" href="/ForgotPassword">
                                        J'ai oublié mon mot de passe
                                    </a>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="text-center">
                                    <a className="btn btn-link btn-primary text-center" href="/register">
                                        Créer un compte
                                    </a>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    };
}
