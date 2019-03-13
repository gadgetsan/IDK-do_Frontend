import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Jumbotron, Modal } from "react-bootstrap";
import helpers from "../helpers";
import IdeaLineView from "../Views/IdeaLineView";

export default class EditIdeaModalContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            show: false,
            name: this.props.idea.name,
            description: this.props.idea.description,
            link: this.props.idea.link,
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
        var newIdea = { rowid: self.props.idea.rowid, name: this.state.name, description: this.state.description, link: this.state.link, user: user.rowid };
        console.dir(self.props.idea.rowid);
        helpers.postHelper("editIdea", newIdea, result => {
            self.props.editIdea(newIdea);
            self.handleClose();

            self.setState({
                loading: false
            });
        });
    }

    render() {
        return (
            <>
                <a title="Modifier cette idée" rel="tooltip" className="text-primary" data-original-title="Edit Task" onClick={this.handleShow}>
                    <i className="material-icons">edit</i>
                </a>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <form onSubmit={this.handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modifier cette idée</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormGroup controlId="name" bssize="large">
                                <FormLabel>Nom</FormLabel>
                                <FormControl autoFocus type="text" value={this.state.name} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup controlId="description" bssize="large">
                                <FormLabel>Description</FormLabel>
                                <FormControl as="textarea" value={this.state.description} onChange={this.handleChange} type="textarea" />
                            </FormGroup>
                            <FormGroup controlId="link" bssize="large">
                                <FormLabel>Lien</FormLabel>
                                <FormControl value={this.state.link} onChange={this.handleChange} type="textarea" />
                            </FormGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Annuler
                            </Button>
                            <Button type="submit" variant="primary" onClick={this.handleAdd} disabled={this.state.loading}>
                                Enregistrer
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </>
        );
    }
}
