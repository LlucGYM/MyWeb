import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./Header.css";
import Video from './components/video.jsx';
import Menu from "./components/Menu";
import StartButton from "./components/StartButton";

export default function Header(){

    const [active, setActive] = useState(false);

    useEffect(() =>{

    },[active])

    function isActive(active){
        setActive(active);
    }
 
    return(
    <header id="header">
        <StartButton isActive={isActive}/>
        <div className="overlay"></div>
        <Video />
        <Menu active={active}/>
    </header>
    );
}