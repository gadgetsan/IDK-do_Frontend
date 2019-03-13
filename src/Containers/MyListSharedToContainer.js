import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Jumbotron } from "react-bootstrap";
import helpers from "../helpers";
import SharedToElement from "../Views/SharedToElement";
import ShareListModalContainer from "../Containers/ShareListModalContainer";

export default class MyListSharedToContainer extends Component {
    constructor(props) {
        super(props);

        this.addShare = this.addShare.bind(this);
        this.deleteShare = this.deleteShare.bind(this);
        this.state = {
            isLoading: false,
            shares: []
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        helpers.fetchHelper("shares", shareList => {
            this.setState({
                shares: shareList,
                isLoading: false
            });
            //console.log(shareList);
        });
    }

    addShare(share) {
        var newShares = this.state.shares;
        //console.dir(share);
        newShares.push(share);
        this.setState({
            shares: newShares,
            isLoading: false
        });
    }

    deleteShare(id) {
        var newShares = this.state.shares;
        var currentIndex = 0;
        var idToDelete = 0;
        for (var share of newShares) {
            if (share.rowid == id) {
                idToDelete = currentIndex;
                break;
            }
            currentIndex++;
        }

        newShares.splice(idToDelete, 1);
        this.setState({
            shares: newShares,
            isLoading: false
        });
        console.log("Deleted Share " + id);
    }

    render = () => {
        let user = JSON.parse(localStorage.getItem("user"));
        if (this.state.isLoading) {
            return <p>Chargement...</p>;
        } else {
            return (
                <Card>
                    <Card.Header className="card-header-success">
                        <h4 className="card-title">Partage</h4>
                        <p className="card-category">cette liste est partagée avec les personnes possèdant les courriels suivant</p>
                    </Card.Header>
                    <Card.Body>
                        <div className="table-responsive">
                            <table className="table item-table">
                                <tbody>
                                    {this.state.shares.map(share => (
                                        <SharedToElement share={share} key={share.rowid} deleteShare={this.deleteShare} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <ShareListModalContainer addShare={this.addShare} />
                    </Card.Body>
                </Card>
            );
        }
    };
}
