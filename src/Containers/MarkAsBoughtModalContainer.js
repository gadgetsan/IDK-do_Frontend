import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Jumbotron, Modal } from "react-bootstrap";
import helpers from "../helpers";
import IdeaLineView from "../Views/IdeaLineView";

export default class MarkAsBoughtModalContainer extends Component {
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
        var ideaToDelete = { rowid: this.props.idea.rowid, owner: this.props.owner };
        helpers.postHelper("boughtItem", ideaToDelete, result => {
            this.setState({ loading: false });
            this.props.bought();
            this.handleClose();
            //self.props.deleteIdea(this.props.idea.rowid);
        });
    }

    render() {
        return (
            <>
                <button type="button" title="" className="btn btn-info btn-link btn-sm" data-original-title="Remove" onClick={this.handleShow}>
                    <i className="material-icons">strikethrough_s</i>
                    <div className="ripple-container" />
                </button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Marqué comme acheté</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Êtes-vous certain de vouloir Marqué que vous avez acheter l'idée <b>{this.props.idea.name}</b>
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Annuler
                        </Button>
                        <Button type="submit" variant="info" onClick={this.handleSubmit} disabled={this.state.loading}>
                            Marquer comme acheté
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
