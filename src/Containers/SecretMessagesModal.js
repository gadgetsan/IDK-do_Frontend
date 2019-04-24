import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Jumbotron, Modal } from "react-bootstrap";
import helpers from "../helpers";
import IdeaLineView from "../Views/IdeaLineView";
import AddSecretMessageModal from "./AddSecretMessageModal";

export default class SecretMessagesModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.fetchMessages = this.fetchMessages.bind(this);

        this.state = {
            show: false,
            loading: false,
            messages: []
        };
    }

    handleClose() {
        this.setState({
            show: false
        });
    }

    handleShow() {
        this.setState({ show: true });
        //on va aller chercher les messages
        this.fetchMessages();
    }

    fetchMessages() {
        this.setState({
            isLoading: true
        });
        helpers.fetchHelperWithData("getSecretMessages", { itemId: this.props.idea.rowid }, messagesList => {
            console.dir(messagesList);
            this.setState({
                isLoading: false,
                messages: messagesList
            });
            //console.log(ideasList);
        });
    }

    render() {
        return (
            <>
                <a title="Voir les messages secrets" className="text-success" data-original-title="Remove" onClick={this.handleShow}>
                    <i className="material-icons">note</i>
                    <div className="ripple-container" />
                </a>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Messages secrets pour cette idée</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Ces messages ne sont <b>PAS</b> visible pour la personne à qui appartiens cette liste
                            <br />
                        </p>
                        {this.state.isLoading
                            ? "Chargement..."
                            : this.state.messages.map(message => (
                                  <Card>
                                      <Card.Body>{message.text}</Card.Body>
                                  </Card>
                              ))}
                        <AddSecretMessageModal idea={this.props.idea} update={this.fetchMessages} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Fermer
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
