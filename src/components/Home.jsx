import React, { useEffect, useState } from "react";
import StartButton from "./StartButton";
import { Container, Row, Col } from "react-bootstrap";
import './Home.css'
export default function Home (props) {
    const [active, setActive] = useState(false);

    useEffect(() =>{
    },[active])

    function isActive(active){
        setActive(active);
        props.isActive(true);
    }

    return (<Container id="Home">
        <section>
            <Row>
                <Col>
                    <StartButton isActive={isActive}/>
                </Col>
            </Row>
        </section>
    </Container>
    );
}