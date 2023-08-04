import React, {useEffect, useState } from "react";
import RepoListItem from "./RepoListItem";
import { Col, Row, Container } from "react-bootstrap";
import useGitHub from "../Services/ConectionGitHub";
import './RepoList.css';
export default function RepoList() {
    const {repos, reprosGitHub} = useGitHub();
    const [arrayItems, setArrayItems] = useState([]);    

    useEffect(() =>{
        listarRepos()
    },[repos])

    function listarRepos () {
        reprosGitHub();
        if(repos != null){
            const items = repos.map((repo) => {
                if(repo.name !== repo.owner.login){
                    return ( 
                        <Col key={repo.id}>
                        <RepoListItem 
                            key={repo.id}
                            name={repo.name}
                            dataCreation = {repo.created_at}
                            dataLastUpdate = {repo.updated_at}
                            description={repo.description} 
                            topics = {repo.topics}
                            languages = {repo.language}
                    />
                    </Col>)
                }
            })
            setArrayItems(items);   
        }
    }

    return (
        <Container id="Repositorios">
            <Row>
                {arrayItems}
            </Row>
        </Container>
    );
}