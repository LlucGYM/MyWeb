import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './AboutMe.css'
import TitleSection from "./TitleSection";
import Profile from "./Profile";
import CVbutton from "./CVbutton";


export default function AboutMe () {

    return (<Container id="aboutMe">
        <section>   
             <TitleSection Title = "ABOUT"/>
            <Row>
                <Col>
                    <Profile/>
                </Col>
                <Col id="CVdiv"> 
                    <CVbutton/>
                </Col>
            </Row>
        </section>
    </Container>)
}