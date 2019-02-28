import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Jumbotron, Modal } from "react-bootstrap";
import helpers from "../helpers";
import IdeaLineView from "../Views/IdeaLineView";

export default class DeleteShareModalContainer extends Component {
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
        console.dir(this.props.share);
        var shareToDelete = { rowid: this.props.share.rowid, userid: user.rowid };
        helpers.postHelper("deleteShare", shareToDelete, result => {
            this.setState({ loading: false });
            this.handleClose();
            self.props.deleteShare(this.props.share.rowid);
        });
    }

    render() {
        var deleteButtonStyle = {
            padding: "0px"
        };

        return (
            <>
                <a title="" className="btn btn-danger btn-link btn-sm" style={deleteButtonStyle} data-original-title="Remove" onClick={this.handleShow}>
                    <i className="material-icons">close</i>
                    <div className="ripple-container" />
                </a>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Cesser le partage</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Êtes-vous certain de vouloir arrêter le partage avec <b>{this.props.share.toEmail}</b>
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Annuler
                        </Button>
                        <Button type="submit" variant="danger" onClick={this.handleSubmit} disabled={this.state.loading}>
                            Confirmer
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
