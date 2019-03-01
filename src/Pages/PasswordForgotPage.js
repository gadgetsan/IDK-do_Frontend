import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card } from "react-bootstrap";
import ValidIcon from "../Views/ValidIcon";

import "../Login.css";

export default class PasswordForgotPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ""
        };
    }

    validateForm() {
        return this.emailIsValid();
    }

    emailIsValid() {
        return this.state.email.length > 0 && this.state.email.indexOf("@") > -1 && this.state.email.indexOf(".") > -1;
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
            .fetch("https://6jnnzjwmkk.sse.codesandbox.io/api/pwChangeReq", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: this.state.email })
            })
            .then(res => {
                this.props.history.push("/login");
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
                            <Card.Header className="card-header-warning">
                                <Card.Title>Réinitialisation du mot de passe</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="Login">
                                    <form onSubmit={this.handleSubmit}>
                                        <FormGroup controlId="email" bssize="large">
                                            <FormLabel>
                                                Courriel <ValidIcon value={this.emailIsValid()} />
                                            </FormLabel>
                                            <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange} />
                                        </FormGroup>
                                        <Button block bssize="large" className="btn-warning" disabled={!this.validateForm()} type="submit">
                                            Réinitialiser mon mot de passe
                                        </Button>
                                        <p>Une fois ce formulaire envoyé, vous recevrez un courriel contenant un lien pour modifier votre mot de passe</p>
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
