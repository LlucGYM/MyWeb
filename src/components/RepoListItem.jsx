import React, { useState } from "react";


export default function RepoListItem(props) {
    return (
        <div className ="ObjetoRepo">
            
                    <h3>{props.name}</h3>
                 
                    <img alt="Imagen Repositorio" src={props.img}></img>
                    
            <div className="content">
                <p>{props.dataCreation}</p>
                
                <p>{props.dataLastUpdate}</p>
                <p>{props.description}</p>
                <p>{props.languages}</p>
                <p>{props.topics}</p>
            </div>
                    
    
        </div>
    );
}