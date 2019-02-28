import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Jumbotron } from "react-bootstrap";
import helpers from "../helpers";
import PageContainer from "../Containers/PageContainer";
import queryString from "query-string";

export default class ListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key: "",
            validated: false,
            error: ""
        };
    }
    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        console.log(values.key); // "top"
        this.setState({
            key: values.key
        });
        this.setState({ isLoading: true });
        helpers.postHelperNoAuth("validate", { key: values.key }, res => {
            console.dir(res);
            if (res == true) {
                this.setState({
                    validated: true
                });
            }
            //console.log(ideasList);
        });
    }
    render() {
        let user = JSON.parse(localStorage.getItem("user"));
        if (this.state.key == undefined) {
            return (
                <PageContainer>
                    <Jumbotron>
                        <h1>Validation requise!</h1>
                        <p>Rendez-vous sur votre courriel afin de valider votre adresse courriel et de pouvoir utiliser ce logiciel</p>
                    </Jumbotron>
                </PageContainer>
            );
        } else {
            if (this.state.validated) {
                return (
                    <PageContainer>
                        <Jumbotron>
                            <h1>Compte validé</h1>
                            <p>Votre compte est maintenant validé, vous pouvez vous connecter</p>
                        </Jumbotron>
                    </PageContainer>
                );
            } else {
                if (!this.setState.error || this.setState.error == "") {
                    return (
                        <PageContainer>
                            <Jumbotron>
                                <h1>Validation en cours ...</h1>
                                <p>Votre nouveau compte est en cours de validation</p>
                            </Jumbotron>
                        </PageContainer>
                    );
                } else {
                    return (
                        <PageContainer>
                            <Jumbotron>
                                <h1>Erreur lors de la validation</h1>
                                <p>{this.state.error}</p>
                            </Jumbotron>
                        </PageContainer>
                    );
                }
            }
        }
    }
}

/*
export default class HelloUserPage extends Component {
    render = () => {
        return <h1>HELLO WORLD!</h1>;
    };
}
*/
