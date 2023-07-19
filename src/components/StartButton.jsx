import React, { useState } from "react";

export default function StartButton(props) {

    const [active, setActive] = useState(false);

    async function handleOnClick(e) {
        await sleep(300); //0.3 segundos
        setActive(true);
        props.isActive(true);
    }
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return(
        <div className="ContainerButton" >
            <span>Hi!!, If you are here it is because you want to know more about me right? ;D, Explore my WEB!</span>
            <button className={active ? "StartButton active" : "StartButton"} onClick={handleOnClick}>
                START
            </button>
        </div>
    );
}