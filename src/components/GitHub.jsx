import React from "react";
import RepoList from "./RepoList";
import { Col, Container, Row } from "react-bootstrap";
import TitleSection from "./TitleSection";

import "./GitHub.css";

export default function GitHub(){

    return(
        <Container id="GitHub">
            <section>
                <TitleSection Title="MY PROJECTS"/>
                <Row>
                    <Col><RepoList/></Col>
                </Row>
            </section>
        </Container>
    );
}