import React, { useEffect,useState } from "react";
import RepoListItem from "./RepoListItem";
import { Col, Row, Container } from "react-bootstrap";

export default function RepoList() {
    const repoUserName = "LlucGYM"
    const [arrayItems, setArrayItems] = useState([]);
    
    useEffect(()=>  {
        connectionGitHub();
    });

    async function connectionGitHub(){
        await fetch(`https://api.github.com/users/${repoUserName}/repos`)
        .then(response => response.json())
        .then(data =>{
            const items = data.map((arrayItem) => {
                return (
                    <RepoListItem 
                        key={arrayItem.id}
                        name={arrayItem.full_name}
                        dataCreation = {arrayItem.created_at}
                        dataLastUpdate = {arrayItem.updated_at}
                        description={arrayItem.description} 
                        topics = {arrayItem.topics}
                    />
                );
            })
            setArrayItems(items);
        }) 
    }

    return (
        <Container id="Repositorios">
            <Row>
                <Col>
                <h2>Repositorios</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    {arrayItems}
                </Col>
            </Row>
        </Container>
    );
}