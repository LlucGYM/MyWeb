import React from "react";
import RepoList from "./components/RepoList";
import Profile from "./components/Profile";
import { Col, Container, Row } from "react-bootstrap";

import "./main.css";

export default function Main(){

    return(
        <main>
        <Container id="main">
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