import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Jumbotron } from "react-bootstrap";
import helpers from "../helpers";
import SharedWithMeListView from "../Views/SharedWithMeListView";
import ShareListModalContainer from "../Containers/ShareListModalContainer";

export default class SharedWithMeListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            sharedWithMe: []
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        helpers.fetchHelper("sharedWithMe", resultList => {
            //console.dir(resultList);
            this.setState({
                sharedWithMe: resultList,
                isLoading: false
            });
            //console.log(shareList);
        });
    }

    render = () => {
        let user = JSON.parse(localStorage.getItem("user"));
        if (this.state.isLoading) {
            return <p>Chargement...</p>;
        } else {
            return (
                <Card>
                    <Card.Header className="card-header-info">
                        <h4 className="card-title">Partagé avec moi</h4>
                        <p className="card-category">Ces utilisateurs partagent leur liste avec vous</p>
                    </Card.Header>
                    <Card.Body>
                        <div className="table-responsive">
                            <table className="table item-table">
                                <tbody>
                                    {this.state.sharedWithMe.map(shareUser => (
                                        <SharedWithMeListView
                                            key={shareUser.rowid}
                                            shared={shareUser}
                                            selected={this.props.rowSelected}
                                            isSelected={this.props.selectedRowId === shareUser.rowid}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card.Body>
                </Card>
            );
        }
    };
}
