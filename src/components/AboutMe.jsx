import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TitleSection from "./TitleSection";
import Profile from "./Profile";


export default function AboutMe () {

    return (<Container id="aboutMe">
        <section>   
            <Row>
                <Col>
                    <TitleSection Title = "ABOUT"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Profile/>
                </Col>
            </Row>
        </section>
    </Container>)
}