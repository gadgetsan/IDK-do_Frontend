import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Jumbotron } from "react-bootstrap";
import helpers from "../helpers";
import SharedIdeaLineView from "../Views/SharedIdeaLineView";
import AddIdeaModalContainer from "./AddIdeaModalContainer";
import UserContainer from "./UserContainer";

export default class SharedWithMeIdeasContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            ideas: []
        };
    }

    componentDidUpdate(oldProps) {
        //on doit commencer par valider que le nouveau Props est différent que l'ancien
        const newProps = this.props;
        if (oldProps.selectedRowId !== newProps.selectedRowId) {
            this.setState({ isLoading: true });
            helpers.fetchHelperWithData("sharedList", { sharedUserId: this.props.selectedRowId }, ideasList => {
                this.setState({
                    ideas: ideasList,
                    isLoading: false
                });
                //console.log(ideasList);
            });
        }
    }

    render = () => {
        let user = JSON.parse(localStorage.getItem("user"));
        if (this.props.selectedRowId == 0) {
            return <p>Veuillez sélectionner un liste qui vous est partagée (à gauche)</p>;
        } else {
            if (this.state.isLoading) {
                return <p>Chargement...</p>;
            } else {
                return (
                    <Card>
                        <Card.Header className="card-header-primary">
                            <h4 className="card-title">
                                Liste d'idées pour{" "}
                                <b>
                                    <UserContainer id={this.props.selectedRowId} />
                                </b>
                            </h4>
                            <p className="card-category">Liste d'idées</p>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead className=" text-primary">
                                        <tr>
                                            <th>Nom</th>
                                            <th>Description</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.ideas.map(idea => (
                                            <SharedIdeaLineView idea={idea} key={idea.rowid} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                );
            }
        }
    };
}
