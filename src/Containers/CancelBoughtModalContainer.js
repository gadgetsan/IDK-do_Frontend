import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Jumbotron, Modal } from "react-bootstrap";
import helpers from "../helpers";
import IdeaLineView from "../Views/IdeaLineView";

export default class CancelBoughtModalContainer extends Component {
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
        var ideaToCancel = { rowid: this.props.idea.rowid, owner: this.props.owner, boughtUser: null, boughtDate: null };
        helpers.postHelper("cancelBought", ideaToCancel, result => {
            this.setState({ loading: false });
            this.props.cancelBought(ideaToCancel);
            this.handleClose();
        });
    }

    render() {
        return (
            <>
                <a title="Marquer cette idée comme achetée" className="text-info" data-original-title="Remove" onClick={this.handleShow}>
                    <i className="material-icons">undo</i>
                    <div className="ripple-container" />
                </a>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Marqué comme non-acheté</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Êtes-vous certain de vouloir marqué l'item <b>{this.props.idea.name}</b> comme non-achetée
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Annuler
                        </Button>
                        <Button type="submit" variant="info" onClick={this.handleSubmit} disabled={this.state.loading}>
                            Marquer comme non-acheté
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
