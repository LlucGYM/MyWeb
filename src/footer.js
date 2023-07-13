import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./footer.css";

export default function Footer(){

    return(
        <Container id="footer">
            <Row>
                <Col>
                    <i className="fa-brands fa-instagram fa-bounce fa-xl"></i>
                </Col>
                <Col>
                    <i className="fa-brands fa-twitter fa-bounce fa-xl"></i>
                </Col>
                <Col>
                    <i className="fa-brands fa-linkedin fa-bounce fa-xl"></i>
                </Col>
                <Col>
                    <i className="fa-brands fa-github  fa-bounce fa-xl"></i>
                </Col>
            </Row>
        </Container>
    );
}