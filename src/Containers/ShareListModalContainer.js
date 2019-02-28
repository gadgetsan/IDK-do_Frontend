import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Jumbotron, Modal } from "react-bootstrap";
import helpers from "../helpers";
import IdeaLineView from "../Views/IdeaLineView";

export default class ShareListModalContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            show: false,
            email: "",
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
        var newShare = { rowid: -1, shareEmail: this.state.email };
        helpers.postHelper("addShare", newShare, result => {
            var shareToAdd = { rowid: result, toEmail: newShare.shareEmail };
            self.props.addShare(shareToAdd);
            self.handleClose();

            self.setState({
                email: "",
                loading: false
            });
        });
    }

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow} className="btn btn-success pull-right">
                    Partager
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <form onSubmit={this.handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Partager cette liste avec une nouvelle personne</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormGroup controlId="email" bssize="large">
                                <FormLabel>Courriel</FormLabel>
                                <FormControl autoFocus type="text" value={this.state.email} onChange={this.handleChange} />
                            </FormGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Annuler
                            </Button>
                            <Button type="submit" variant="success" onClick={this.handleAdd} disabled={this.state.loading}>
                                Ajouter
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </>
        );
    }
}
