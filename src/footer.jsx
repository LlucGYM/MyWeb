import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './footer.css'

export default function Footer () {
  const setActiveButton = (e) => {
    if (e.target.className && typeof e.target.className.includes() !== 'undefined' && (e.target.className.includes('fa-bounce'))) {
      e.target.className = e.target.className.replace(' fa-bounce', ' ')
    } else {
      e.target.className = e.target.className + ' fa-bounce'
    }
  }

  const currentYear = () => {
    const y = new Date().getFullYear()
    return (y.toString())
  }

  return(
    <footer id="footer">
            <Container >
                <Row id="titles">
                    <Col>
                        <h4>FOLLOW ME</h4>
                    </Col>
                    <Col>
                        <h4>CONTACT</h4>
                    </Col>                        
                </Row>
                <Row>
                    <Col>
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
                        <ul>
                            <li>
                                Barcelona, Spain
                            </li>
                            <li>
                                lucasgarridoantolino99@gmail.com            
                            </li>
                            <li>
                                +34 652 60 26 12
                            </li>
                        </ul>
                    </Col>
                </Row>
               
                <Row id="CopyRight">
                    <Col >
                        <small>Copyright &copy; {currentYear()}, <span className='enfasis1'>Lucas Garrido</span>, My web page created in <span className='enfasis2'>ReactJS</span></small>
                    </Col>
                </Row>
            </Container>
        </footer>
  )
}