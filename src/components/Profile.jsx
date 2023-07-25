import React, { useCallback, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Profile.css";
import useGitHub from "../Services/ConectionGitHub";

export default function Profile(){
    
    const {name,nick,image,description, company, profileGitHub} = useGitHub();
    
    useEffect(() =>{
        profileGitHub();
    },[])

    return(
    <Container id="profile">
        <Row>
            <Col>
                <h2 className="titleSection">MI GITHUB</h2>
            </Col>
        </Row>
        <Row>
            <Col className="imageProfile">
                <a href="https://github.com/LlucGYM" ><img src={image} /></a>
            </Col>
        </Row>
        <Row>
            <Col>
                <p>Name: {name}</p>
                <p>Nick: {nick}</p>
                <p>Description: {description}</p>
                <p>Actual Company: {company}</p>
            </Col>
        </Row>
        
    </Container>
    );
}