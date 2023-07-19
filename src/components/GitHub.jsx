import React from "react";
import RepoList from "./RepoList";
import Profile from "./Profile";
import { Col, Container, Row } from "react-bootstrap";

import "./GitHub.css";

export default function GitHub(){

    return(
        <main id="main">
        <Container id="GitHub">
            <section>
                <Row>
                    <Col>
                        <Profile/>
                    </Col>
                </Row>
                <Row>
                    <Col><RepoList/></Col>
                </Row>
            </section>
        </Container>
        </main>
    );
}