import React, { useEffect, useState } from "react";
import useGitHub from "../Services/ConectionGitHub";
import TypewriterComponent from "typewriter-effect";
import { Link } from "react-router-dom";

export default function StartButton(props) {

    const [active, setActive] = useState(false)
    const {image, name, profileGitHub} = useGitHub()

    useEffect(() => {
        profileGitHub();
    })

    async function handleOnClick(e) {
         
        setActive(true);
        props.isActive(true);
        await sleep(500); //0.3 segundos
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
                        .typeString("Lucas Garrido Antolino")
                        .start();
                }}
                />
            </div>
            <div>
                <span className={active ? "textStart active" : "textStart"}> Hi, I'm Lucas and I'm a <span className="enfasis2"> Computer Engineer</span>.  
                 I invite you to explore my WEB and to contact me if you find it interesting.
                </span>
            </div>
            <div>
                <Link  to="/AboutMe" ><button onClick={handleOnClick} className={active ? "StartButton active" : "StartButton"} >WELCOME</button></Link>
            </div>
        </div>
    );
}