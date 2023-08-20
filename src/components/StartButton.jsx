import React, { useEffect, useState } from "react";
import useGitHub from "../Services/ConectionGitHub";
import TypewriterComponent from "typewriter-effect";

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

        
    return(
        <div className={active ? "ContainerButton active" : "ContainerButton"}>
            <div><a href="https://github.com/LlucGYM"><img src={image} alt='Imagen de Perfil'/></a></div>
            <div>
                <TypewriterComponent
                    onInit={(typewriter) => {
                        typewriter
                        .typeString("Luke Sky")
                        .deleteAll()
                        .typeString("Lucas Garrido")
                        .start();
                }}
                />
            </div>
            <div>
                <span className={active ? "textStart active" : "textStart"}>DO YOU WANT TO PLAY A GAME?, <span className="enfasis1">EXPLORE MY</span> <span className="enfasis2">WEB</span><span className="enfasis1">!</span></span>
            </div>
            <div><button className={active ? "StartButton active" : "StartButton"} onClick={handleOnClick}>
                START
            </button></div>
        </div>
    );
}