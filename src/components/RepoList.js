import React, { useEffect,useState } from "react";
import RepoListItem from "./RepoListItem";

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
        <div>
            <h1>Lista de Repositorios</h1>
            {arrayItems}
        </div>
    );
}