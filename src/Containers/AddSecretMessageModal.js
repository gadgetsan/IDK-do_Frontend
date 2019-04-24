import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Jumbotron, Modal } from "react-bootstrap";
import helpers from "../helpers";
import IdeaLineView from "../Views/IdeaLineView";

export default class AddSecretMessageModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            show: false,
            text: "",
            loading: false
        };
    }

    handleClose() {
        this.setState({
            show: false
        });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        var self = this;
        this.setState({ loading: true });
        let user = JSON.parse(localStorage.getItem("user"));
        //console.dir(this.props.idea);
        helpers.postHelper("addSecretMessage", { ideaId: this.props.idea.rowid, message: this.state.text }, result => {
            //TODO: Update Parent
            this.props.update();
            self.handleClose();

            self.setState({
                text: "",
                loading: false
            });
        });
    }

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow} className="btn btn-primary pull-right">
                    Écrire une message secret
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <form onSubmit={this.handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Ajouter un message secret</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormGroup controlId="text" bssize="large">
                                <FormLabel>Texte</FormLabel>
                                <FormControl as="textarea" value={this.state.text} onChange={this.handleChange} type="textarea" />
                            </FormGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Annuler
                            </Button>
                            <Button type="submit" variant="primary" onClick={this.handleAdd} disabled={this.state.loading}>
                                Ajouter
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </>
        );
    }
}
