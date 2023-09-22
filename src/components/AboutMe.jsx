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
            <Row>
                <Col>
                <span className="textStart">Hello! I am Lucas, a  
                <span className="enfasis1"> Computer Engineer </span>
                with more than two years of experience. I have worked as a 
                <span className="enfasis2"> Junior System Engineer </span> in IT Infrastructure 
                Consultancy and now I have been working as a 
                <span className="enfasis2"> Junior Software Engineer </span> in a multinational company 
                since May 2022. I am currently looking for a job where I can find the opportunity to progress as a 
                Computer Engineer and face new challenges, as well as improve my professional skills and gain more 
                experience
                </span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="subtitleSection">Experience</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="subtitleSection">Studies</h2>
                </Col>
            </Row>
            <Row id="dobleSection">
                <Col>
                    <h2 className="subtitleSection">Skills</h2>
                </Col>
                <Col>
                    <h2 className="subtitleSection">Languages</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="subtitleSection">More</h2>
                </Col>
            </Row>
        </section>
    </Container>)
}