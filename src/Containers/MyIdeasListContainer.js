import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Jumbotron } from "react-bootstrap";
import helpers from "../helpers";
import IdeaLineView from "../Views/IdeaLineView";
import AddIdeaModalContainer from "./AddIdeaModalContainer";

export default class MyIdeasListContainer extends Component {
    constructor(props) {
        super(props);

        this.addIdea = this.addIdea.bind(this);
        this.deleteIdea = this.deleteIdea.bind(this);

        this.state = {
            isLoading: false,
            ideas: []
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        helpers.fetchHelper("list", ideasList => {
            this.setState({
                ideas: ideasList,
                isLoading: false
            });
            //console.log(ideasList);
        });
    }

    addIdea(idea) {
        var newIdeas = this.state.ideas;
        //console.dir(idea);
        newIdeas.push(idea);
        this.setState({
            ideas: newIdeas,
            isLoading: false
        });
        //console.log("NEW IDEA!");
    }

    deleteIdea(id) {
        var newIdeas = this.state.ideas;
        var currentIndex = 0;
        var idToDelete = 0;
        for (var idea of newIdeas) {
            if (idea.rowid == id) {
                idToDelete = currentIndex;
                break;
            }
            currentIndex++;
        }

        newIdeas.splice(idToDelete, 1);
        this.setState({
            ideas: newIdeas,
            isLoading: false
        });
        //console.log("Deleted Idea " + id);
    }

    render = () => {
        let user = JSON.parse(localStorage.getItem("user"));
        if (this.state.isLoading) {
            return <p>Chargement...</p>;
        } else {
            return (
                <Card>
                    <Card.Header className="card-header-primary">
                        <h4 className="card-title">Mes Idées</h4>
                    </Card.Header>
                    <Card.Body>
                        <div className="table-responsive">
                            <table className="table item-table">
                                <tbody>
                                    {this.state.ideas.map(idea => (
                                        <IdeaLineView idea={idea} key={idea.rowid} deleteIdea={this.deleteIdea} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <AddIdeaModalContainer addIdea={this.addIdea} />
                    </Card.Body>
                </Card>
            );
        }
    };
}
