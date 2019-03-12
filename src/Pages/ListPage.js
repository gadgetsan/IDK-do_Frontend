import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Jumbotron } from "react-bootstrap";
import helpers from "../helpers";
import MyIdeasListContainer from "../Containers/MyIdeasListContainer";
import MyListSharedToContainer from "../Containers/MyListSharedToContainer";
import PageContainer from "../Containers/PageContainer";

export default class ListPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}
    render = () => {
        let user = JSON.parse(localStorage.getItem("user"));
        return (
            <PageContainer name="Liste d'idées">
                <Row>
                    <Col lg={9}>
                        <MyIdeasListContainer />
                    </Col>
                    <Col lg={3}>
                        <MyListSharedToContainer />
                    </Col>
                </Row>
            </PageContainer>
        );
    };
}
