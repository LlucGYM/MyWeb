import React, { useEffect, useState } from "react";
import RepoListItem from "./RepoListItem";
import { Col, Row, Container } from "react-bootstrap";
import useGitHub from "../Services/ConectionGitHub";

export default function RepoList() {
    const {repos, reprosGitHub} = useGitHub();
    const [arrayItems, setArrayItems] = useState([]);    


    useEffect(()=>  {
        reprosGitHub();
        listarRepos();
    });

    function listarRepos () {
        if(repos != null){
            const items = repos.map((repo) => {
                return (
                    <RepoListItem 
                        key={repo.id}
                        name={repo.full_name}
                        dataCreation = {repo.created_at}
                        dataLastUpdate = {repo.updated_at}
                        description={repo.description} 
                        topics = {repo.topics}
                    />
                );
            })
            setArrayItems(items);   
        }
       
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