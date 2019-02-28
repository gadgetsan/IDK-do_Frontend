import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Jumbotron } from "react-bootstrap";
import helpers from "../helpers";
import SharedIdeaLineView from "../Views/SharedIdeaLineView";
import AddIdeaModalContainer from "./AddIdeaModalContainer";

export default class UserContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            user: {}
        };
    }

    componentDidMount(oldProps) {
        this.setState({ isLoading: true });
        helpers.fetchHelperWithData("user", { rowid: this.props.id }, fetchedUser => {
            this.setState({
                user: fetchedUser,
                isLoading: false
            });
            //console.log(fetchedUser);
        });
    }

    render = () => {
        let user = JSON.parse(localStorage.getItem("user"));
        if (this.state.isLoading) {
            return <span>...</span>;
        } else {
            return <span>{this.state.user.name}</span>;
        }
    };
}
