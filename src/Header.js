import React from "react";
import { Col, Row, Container } from "react-bootstrap";

export default function Header(){

    return(
    <Container id="header">
        <Row>
            <Col>
                <h1>Header</h1>
            </Col>
        </Row>
    </Container>);
}