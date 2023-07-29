import React, { useEffect, useState } from "react";
import RepoListItem from "./RepoListItem";
import { Col, Row, Container } from "react-bootstrap";
import useGitHub from "../Services/ConectionGitHub";
import './RepoList.css';
import img from "../assets/MyWeb.png";
export default function RepoList() {
    const {repos, reprosGitHub} = useGitHub();
    const [arrayItems, setArrayItems] = useState([]);    


    useEffect(()=>  {
        reprosGitHub();
        listarRepos();
    },[repos]);

    function listarRepos () {
        if(repos != null){
            const items = repos.map((repo) => {
                return (
                    <Col>
                    <RepoListItem 
                        key={repo.id}
                        name={repo.name}
                        dataCreation = {repo.created_at}
                        dataLastUpdate = {repo.updated_at}
                        description={repo.description} 
                        topics = {repo.topics}
                        languages = {repo.languages}
                        img = {img}
                />
                </Col>
                );
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