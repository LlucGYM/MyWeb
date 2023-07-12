import React, { useEffect, useState } from "react";

export default function Profile(){
    const [name,setName] = useState("")
    const [image,setImage] = useState("")
    const repoUserName = "LlucGYM"

    useEffect(() => {
        connectionGitHub()
    })

    async function connectionGitHub(){
        await fetch(`https://api.github.com/users/${repoUserName}`)
        .then(response => response.json())
        .then(data =>{
                setName(data.login);
                setImage(data.avatar_url);
        })
    } 

    return(
    <div id="profile">
        <img src={image}></img>
        <p>{name}</p>
    </div>
    );
}