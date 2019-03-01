import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card } from "react-bootstrap";
import ValidIcon from "../Views/ValidIcon";

import "../Login.css";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            password2: ""
        };
    }

    validateForm() {
        return this.emailIsValid() && this.passwordIsValid();
    }

    emailIsValid() {
        return this.state.email.length > 0 && this.state.email.indexOf("@") > -1 && this.state.email.indexOf(".") > -1;
    }

    passwordIsValid() {
        return this.state.password.length > 0 && this.state.password == this.state.password2;
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
            .fetch("https://6jnnzjwmkk.sse.codesandbox.io/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: this.state.email, password: this.state.password, name: this.state.name })
            })
            .then(res => {
                this.props.history.push("/Validation");
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
                            <Card.Header className="card-header-info">
                                <Card.Title>S'enregistrer</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="Login">
                                    <form onSubmit={this.handleSubmit}>
                                        <FormGroup controlId="name" bssize="large">
                                            <FormLabel>Nom</FormLabel>
                                            <FormControl autoFocus type="text" value={this.state.name} onChange={this.handleChange} />
                                        </FormGroup>
                                        <FormGroup controlId="email" bssize="large">
                                            <FormLabel>
                                                Courriel <ValidIcon value={this.emailIsValid()} />
                                            </FormLabel>
                                            <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange} />
                                        </FormGroup>
                                        <FormGroup controlId="password" bssize="large">
                                            <FormLabel>Mot de Passe</FormLabel>
                                            <FormControl value={this.state.password} onChange={this.handleChange} type="password" />
                                        </FormGroup>
                                        <FormGroup controlId="password2" bssize="large">
                                            <FormLabel>
                                                Confirmation du mot de passe <ValidIcon value={this.passwordIsValid()} />
                                            </FormLabel>
                                            <FormControl value={this.state.password2} onChange={this.handleChange} type="password" />
                                        </FormGroup>
                                        <Button block bssize="large" className="btn-info" disabled={!this.validateForm()} type="submit">
                                            Créer ce compte
                                        </Button>
                                    </form>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    };
}
