import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function Menu (props) {
    return(
        <div className={props.active ? 'ContainerMenuButton active' : 'ContainerMenuButton'}>
            <Router>
                <Link to="/"><button className="Button">ABOUT ME</button></Link>
                <Link to="/"><button className="Button">MY PROJECTS</button></Link>
                <Link to="/"><button className="Button">SOCIAL</button></Link>
                <Link to="/"><button className="Button">CONTACT ME</button></Link>
            </Router>
        </div>
    )
}