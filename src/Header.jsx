import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./Header.css";
import Video from './components/video.jsx';
import StartButton from "./components/StartButton";

export default function Header(){

    return(
    <header>
        <Container id="header">
           <Row>
                <Col>
                    <StartButton/>
                    <div className="overlay"></div>
                    <Video/>
                    <div className="content">
                        <h1>Bienvenido</h1>
                        <h1>A</h1>
                        <h1>Mi</h1>
                        <h1>WEB</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    </header>
    );
}