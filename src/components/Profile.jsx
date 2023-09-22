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
            <Col className="imageProfile">
                <a href="https://github.com/LlucGYM" ><img src={image} /></a>
            </Col>
        </Row>
        <Row>
            <Col>
                <p><span className="profileText">Name: </span>{name}</p>
                <p><span className="profileText">Job: </span>Software Engineer</p>
                <p><span className="profileText">Company: </span>{company}</p>
            </Col>
        </Row>
        
    </Container>
    );
}