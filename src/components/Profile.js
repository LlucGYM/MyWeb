import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Profile.css";

export default function Profile(){
    const [name,setName] = useState("")
    const [login,setLogin] = useState("")
    const [image,setImage] = useState("")
    const [description,setDescription] = useState("")
    const [company,setCompany] = useState("")
    const repoUserName = "LlucGYM"

    useEffect(() => {
        connectionGitHub()
    })

    async function connectionGitHub(){
        await fetch(`https://api.github.com/users/${repoUserName}`)
        .then(response => response.json())
        .then(data =>{
                setName(data.name);
                setLogin(data.login);
                setImage(data.avatar_url);
                setDescription(data.description);
                setCompany(data.company);
        })
    } 


    return(
    <Container id="profile">
        <Row>
            <Col>
                <h2>Mi GitHub</h2>
            </Col>
        </Row>
        <Row>
            <Col id="imageProfile">
                <a href="https://github.com/LlucGYM" ><img src={image} /></a>
            </Col>
        </Row>
        <Row>
            <Col>
                <p>{name}</p>
                <p>{login}</p>
                <p>{description}</p>
                <p>{company}</p>
            </Col>
        </Row>
        
    </Container>
    );
}