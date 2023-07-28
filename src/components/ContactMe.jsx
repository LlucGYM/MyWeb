import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TitleSection from "./TitleSection";

export default function ContactMe () {
    return (<Container id="aboutMe">
    <section>   
        <Row>
            <Col>
                <TitleSection Title = "CONTACT ME"/>
            </Col>
        </Row>

    </section>
</Container>)
}