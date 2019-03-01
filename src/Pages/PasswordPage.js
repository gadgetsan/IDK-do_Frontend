import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card } from "react-bootstrap";
import helpers from "../helpers";
import ValidIcon from "../Views/ValidIcon";
import queryString from "query-string";

import "../Login.css";

export default class PasswordPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: "",
            password2: "",
            key: ""
        };
    }

    validateForm() {
        return this.passwordIsValid();
    }

    passwordIsValid() {
        return this.state.password.length > 0 && this.state.password == this.state.password2;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.dir(this.state);
        window
            .fetch(helpers.apiURL + "/api/pwChange", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password: this.state.password, key: this.state.key })
            })
            .then(res => {
                this.props.history.push("/login");
            })
            .catch(function(err) {
                console.error("ERR: " + err.message);
            });
    };

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        //console.log(values.key); // "top"
        this.setState({
            key: values.key
        });
    }

    render = () => {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg="5">
                        <Card className="card-profile">
                            <Card.Header className="card-header-info">
                                <Card.Title>Modification du mot de passe</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="Login">
                                    <form onSubmit={this.handleSubmit}>
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
                                            Modifier mon mot de passe
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
