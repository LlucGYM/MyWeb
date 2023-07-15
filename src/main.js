import React from "react";
import RepoList from "./components/RepoList";
import Profile from "./components/Profile";
import { Col, Container, Row } from "react-bootstrap";

import "./main.css";

export default function Main(){

    return(
        <Container id="main">
            <Row>
                <Col>
                    <Profile/>
                    <RepoList/>
                </Col>
            </Row>
        </Container>
    );
}