import React from "react";
import RepoList from "./RepoList";
import { Col, Container, Row } from "react-bootstrap";
import TitleSection from "./TitleSection";

import "./GitHub.css";

export default function GitHub(){

    return(
        <Container id="GitHub">
            <section>
                <Row>
                    <Col>
                        <TitleSection Title="MY PROJECTS"/>
                    </Col>
                </Row>
            
                <Row>
                    <Col><RepoList/></Col>
                </Row>
            </section>
        </Container>
    );
}