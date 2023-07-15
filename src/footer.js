import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./footer.css";

export default function Footer(){

    const setActiveButton = (e) =>{
       
        if (e.target.className && typeof e.target.className.includes() !== undefined && (e.target.className.includes("fa-bounce")) ){
            e.target.className=e.target.className.replace(" fa-bounce"," ");
        }else{
            e.target.className = e.target.className + " fa-bounce";
        }
    }

    const currentYear = () =>{
        var y = new Date().getFullYear();
        return (y.toString());
    }

    return(
        <footer id="footer">
            <Container >
                <Row id="titles">
                    <Col xs={6}>
                        <span>FOLLOW ME</span>
                    </Col>
                    <Col xs={6}>
                        <span>CONTACT</span>
                    </Col>                        
                </Row>
                <Row>
                    <Col >
                        <i className="fa-brands fa-instagram fa-xl"
                            onMouseOver={setActiveButton}
                            onMouseOut ={setActiveButton}></i>
                            <i className="fa-brands fa-twitter fa-xl"
                            onMouseOver={setActiveButton}
                            onMouseOut ={setActiveButton}></i>
                             <i className="fa-brands fa-linkedin fa-xl"
                            onMouseOver={setActiveButton}
                            onMouseOut ={setActiveButton}></i>
                            <i className="fa-brands fa-github fa-xl"
                            onMouseOver={setActiveButton}
                            onMouseOut ={setActiveButton}></i>
                            
                    </Col>
                    <Col>
                    <span>Barcelona, Spain</span>
                    <span>lucasgarridoantolino99@gmail.com</span>
                    <span>+34 652 602 612</span>               
                    </Col>
                </Row>
               
                <Row id="CopyRight">
                    <Col >
                        <small>Copyright &copy; {currentYear()}, Lucas Garrido, My web page created by me</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}