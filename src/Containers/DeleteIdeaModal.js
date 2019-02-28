import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Jumbotron, Modal } from "react-bootstrap";
import helpers from "../helpers";
import IdeaLineView from "../Views/IdeaLineView";

export default class DeleteIdeaModalContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            show: false,
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

    handleSubmit(event) {
        event.preventDefault();
        var self = this;
        this.setState({ loading: true });
        let user = JSON.parse(localStorage.getItem("user"));
        var ideaToDelete = { rowid: this.props.idea.rowid, userid: user.rowid };
        helpers.postHelper("deleteIdea", ideaToDelete, result => {
            this.setState({ loading: false });
            this.handleClose();
            self.props.deleteIdea(this.props.idea.rowid);
        });
    }

    render() {
        return (
            <>
                <button type="button" title="" className="btn btn-danger btn-link btn-sm" data-original-title="Remove" onClick={this.handleShow}>
                    <i className="material-icons">close</i>
                    <div className="ripple-container" />
                </button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Suppresion de l'idée</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Êtes-vous certain de vouloir supprimer l'idée <b>{this.props.idea.name}</b>
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Annuler
                        </Button>
                        <Button type="submit" variant="danger" onClick={this.handleSubmit} disabled={this.state.loading}>
                            Supprimer
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
