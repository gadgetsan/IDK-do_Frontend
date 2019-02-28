import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col, Card, Jumbotron } from "react-bootstrap";
import helpers from "../helpers";
import PageContainer from "../Containers/PageContainer";
import SharedWithMeListContainer from "../Containers/SharedWithMeListContainer";
import SharedWithMeIdeasContainer from "../Containers/SharedWithMeIdeasContainer";

export default class SharesPage extends Component {
    constructor(props) {
        super(props);
        this.selectSharedList = this.selectSharedList.bind(this);

        this.state = {
            selectedRowId: 0
        };
    }

    selectSharedList(selectedRowId) {
        //console.dir(selectedRowId);
        this.setState({
            selectedRowId: selectedRowId
        });
    }

    componentDidMount() {}
    render = () => {
        let user = JSON.parse(localStorage.getItem("user"));
        return (
            <PageContainer>
                <Row>
                    <Col lg={3}>
                        <SharedWithMeListContainer selectedRowId={this.state.selectedRowId} rowSelected={this.selectSharedList} />
                    </Col>
                    <Col lg={9}>
                        <SharedWithMeIdeasContainer selectedRowId={this.state.selectedRowId} />
                    </Col>
                </Row>
            </PageContainer>
        );
    };
}
