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
                        .typeString("Lucas Garrido")
                        .start();
                }}
                />
            </div>
            <div>
                <h1 className="enfasis2"> Computer Engineer </h1>
            </div>
            <div>
                <span className={active ? "textStart active" : "textStart"}>Hello! I am Lucas, a  
                <span className="enfasis1"> Computer Engineer </span>
                with more than two years of experience. I have worked as a 
                <span className="enfasis2"> Junior System Engineer </span> in IT Infrastructure 
                Consultancy and now I have been working as a 
                <span className="enfasis2"> Junior Software Engineer </span> in a multinational company 
                since May 2022. I am currently looking for a job where I can find the opportunity to progress as a 
                Computer Engineer and face new challenges, as well as improve my professional skills and gain more 
                experience
                </span>
            </div>
            <div>
                <Link  to="/AboutMe" ><button onClick={handleOnClick} className={active ? "StartButton active" : "StartButton"} >START</button></Link>
            </div>
        </div>
    );
}