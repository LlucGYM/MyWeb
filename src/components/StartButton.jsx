import React, { useEffect, useState } from "react";
import useGitHub from "../Services/ConectionGitHub";

export default function StartButton(props) {

    const [active, setActive] = useState(false)
    const {image, name, profileGitHub} = useGitHub()

    useEffect(() => {
        profileGitHub();
    })

    async function handleOnClick(e) {
        await sleep(300); //0.3 segundos
        setActive(true);
        props.isActive(true);
    }
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /*
    const viewButton = () => { 
        return (<></>
            
        )
    }*/
        
        
    return(
        <div className={active ? "ContainerButton active" : "ContainerButton"}>
            <div><a href="https://github.com/LlucGYM"><img src={image} alt='Imagen de Perfil'/></a></div>
            <div><span className={active ? "titleStart active" : "titleStart"}>{name}</span></div>
            <div>
                <span className={active ? "textStart active" : "textStart"}>Hi!!, If you are here it is because you want to know more about me right? ;D, Explore my WEB!</span>
            </div>
            <div><button className={active ? "StartButton active" : "StartButton"} onClick={handleOnClick}>
                START
            </button></div>
        </div>
    );
}