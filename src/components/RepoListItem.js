import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function RepoListItem(props) {

    return (
        <Container class ="ObjetoRepo">
                <Row>
                    <Col>
                    <h3>{props.name}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <img alt="Imagen Repositorio"></img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p>{props.dataCreation}</p>
                    </Col>
                    <Col>
                    <p>{props.dataLastUpdate}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p>{props.description}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p>{props.topics}</p>
                    </Col>
                </Row>
        </Container>
    );
}