import React from "react";
import { Link } from "react-router-dom";
import  {Container, Row, Col} from "react-bootstrap";

export default function Menu (props) {
    return(
        <Container id='Menu'>
            <Row className={props.active ? 'ContainerMenuButton active' : 'ContainerMenuButton'}>
                <Col >
                <Link to="/"><button className="Button">ABOUT ME</button></Link>
                </Col>
                <Col >
                <Link to="/GitHub"><button className="Button">MY PROJECTS</button></Link>
                </Col>
                <Col >
                <Link to="/Social"><button className="Button">SOCIAL</button></Link>
                </Col>
                <Col >
                <Link to="/ContactMe"><button className="Button">CONTACT ME</button></Link>
                </Col>
            </Row>
        </Container>
    )
}