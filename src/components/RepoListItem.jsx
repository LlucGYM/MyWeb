import React, { useState } from "react";

import img_MyWeb from '../images/MyWeb.png';
import img_SC from '../images/ScriptCopy_3.avif';
import img_TFG from '../images/TFG.png';
import img_KNG from '../images/KNG.png';



export default function RepoListItem(props) {
    const MyWeb = "MyWeb";
    const ScriptCopy = "ScriptCopy";
    const TFG = "TFG";
    const Kangoro="Kangoroo"
    function getImg () {
        var image;
        switch (props.name) {
            case MyWeb:
                image = img_MyWeb    
            break;
            case TFG:
                image = img_TFG    
            break;
            case ScriptCopy:
                image = img_SC    
            break;
            case Kangoro:
                image = img_KNG    
            break;
            default:
                image = img_SC;
                break;
        }
        return (<img alt="Imagen Repositorio" src={image}></img>)
    }

    function getTopics () {
        return (props.topics.map((topic) => {
            return(<span className="topic"> {topic} </span>)
        }))
    }

    return (
        <div className ="ObjetoRepo" key={props.name}>
            <h3>{props.name}</h3>
            <div className="imageContainer">
                {getImg()}    
            </div>  
            <div className="content">
                <p>{props.description}</p>
                <p><span className="contentTitle">Creation Date: </span>{props.dataCreation}</p>
                <p><span className="contentTitle">Last Update: </span>{props.dataLastUpdate}</p>
                <p><span className="contentTitle">Languages: </span><span className="enfasis2">{props.languages}</span></p>
                <p><span className="contentTitle">Topics:</span>{getTopics()}</p>
            </div>
        </div>
    );
}