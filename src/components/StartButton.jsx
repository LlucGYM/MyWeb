import React, { useState } from "react";

export default function StartButton() {

    const [active, setActive] = useState(false);

    async function handleOnClick(e) {
        await sleep(1000);
        setActive(true);
    }
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return(
        <div className={active ? "StartButton active" : "StartButton"} >
            <button className="cybr-btn" onClick={handleOnClick}>
            START<span aria-hidden>_</span>
            <span aria-hidden className="cybr-btn__glitch">START</span>
            <span aria-hidden className="cybr-btn__tag">R25</span>
            </button>
        </div>
    );
}