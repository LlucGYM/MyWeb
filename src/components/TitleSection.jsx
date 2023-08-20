import React from "react";
import TypewriterComponent from "typewriter-effect";


export default function TitleSection (props) {

    return ( <div id="title" 
        className="titleSection">
            <TypewriterComponent 
        
        onInit={(typewriter) => {
            typewriter
            .typeString(props.Title)
            .start();
    }}/></div>)
}