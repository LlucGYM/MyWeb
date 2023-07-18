import React, { useState } from "react";

export default function StartButton() {

    const [active, setActive] = useState(false);

    async function handleOnClick(e) {
        await sleep(300); //0.3 segundos
        setActive(true);
    }
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return(
        <div className="ContainerButton" >
            <button className={active ? "StartButton active" : "StartButton"} onClick={handleOnClick}>
                START
            </button>
            <div id="content">
            
            </div>
        </div>
    );
}