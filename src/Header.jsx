import React, { useEffect, useState } from "react";
import "./Header.css";
import Menu from "./components/Menu";

export default function Header(props){

    useEffect(() =>{
    },[props.active])

 
    return(
    <header id="header">
        <Menu active={props.active}/>
    </header>
    );
}