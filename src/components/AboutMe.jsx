import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TitleSection from "./TitleSection";
export default function AboutMe () {

    return (<Container id="aboutMe">
        <section>   
            <Row>
                <Col>
                    <TitleSection Title = "ABOUT"/>
                </Col>
            </Row>

        </section>
    </Container>)
}