import React, { useEffect } from "react";


export default function TitleSection (props) {
    var i = 0;
    useEffect(() =>{
        typeWriter();
    },[])
    
    function typeWriter() {
        const speed = 100;
        if (i < props.Title.length) {
          document.getElementById("title").innerHTML += props.Title.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
    }

    return ( <h2 id="title" className="titleSection"></h2>)
}