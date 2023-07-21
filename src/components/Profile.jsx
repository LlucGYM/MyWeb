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
                <h2>Mi GitHub</h2>
            </Col>
        </Row>
        <Row>
            <Col className="imageProfile">
                <a href="https://github.com/LlucGYM" ><img src={image} /></a>
            </Col>
        </Row>
        <Row>
            <Col>
                <p>{name}</p>
                <p>{nick}</p>
                <p>{description}</p>
                <p>{company}</p>
            </Col>
        </Row>
        
    </Container>
    );
}