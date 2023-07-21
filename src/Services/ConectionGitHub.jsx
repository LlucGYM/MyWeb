import React, { useState, useCallback, useContext } from "react";
import Context from "../Context/miProfileContext";

export default function useGitHub () {
    const repoUserName = "LlucGYM";
    const {name,nick,image,description, company,setName,setNick,setImage,setDescription,setCompany} = useContext(Context);
    const [isLoading, setIsLoading] = useState(false);
    const [repos, setRepos] = useState(null);
    

    const profileGitHub = useCallback(() => {
        setIsLoading(true);
        fetch(`https://api.github.com/users/${repoUserName}`)
        .then(response => response.json())
        .then(data =>{
            window.sessionStorage.setItem('name',data.name);
            window.sessionStorage.setItem('nick',data.login);
            window.sessionStorage.setItem('image',data.avatar_url);
            window.sessionStorage.setItem('description',data.bio);
            window.sessionStorage.setItem('company',data.company);
            setIsLoading(false);
            setName(data.name);
            setNick(data.login);
            setImage(data.avatar_url);
            setDescription(data.description);
            setCompany(data.company);
        }).catch(e=> setIsLoading(false));
    })
    

    const reprosGitHub = useCallback(() => {
        setIsLoading(true);
        fetch(`https://api.github.com/users/${repoUserName}/repos`)
        .then(response => response.json())
        .then(data =>{ 
            setIsLoading(false);
            setRepos(data);
        }).catch(e=> setIsLoading(false));
    })

    return {
        reprosGitHub,
        repos,
        profileGitHub,
        name,
        nick,
        image,
        description, 
        company,
    }
} 
