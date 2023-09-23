import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './AboutMe.css'
import TitleSection from "./TitleSection";
import Profile from "./Profile";
import CVbutton from "./CVbutton";


export default function AboutMe () {

    return (<Container id="aboutMe">
        <section>   
             <TitleSection Title = "ABOUT"/>
            <Row>
                <Col>
                    <Profile/>
                </Col>
                <Col id="CVdiv"> 
                    <CVbutton/>
                </Col>
            </Row>
            <Row>
                <Col>
                <span className="textStart">Hello! I am Lucas, a  
                <span className="enfasis1"> Computer Engineer </span>
                with more than two years of experience. I have worked as a 
                <span className="enfasis2"> Junior System Engineer </span> in IT Infrastructure 
                Consultancy and now I have been working as a 
                <span className="enfasis2"> Junior Software Engineer </span> in a multinational company 
                since May 2022. I am currently looking for a job where I can find the opportunity to progress as a 
                Computer Engineer and face new challenges, as well as improve my professional skills and gain more 
                experience
                </span>
                </Col>
            </Row>
            <Row className="subSection">
                <Col>
                    <h2 className="subtitleSection">STUDIES</h2>
                    <h3><span className="enfasis2">2017 - 2021</span> | <span className="enfasis1">Degree in Computer Engineering</span></h3>
                    <h3><span className="enfasis2">Barcelona, Spain</span> | <span className="enfasis1">Universitat Autonoma de Barcelona (UAB)</span></h3>
                    During my degree, I have worked with different programming languages and technologies, including C++, JAVA, PHP, JS, Python, Bash, SQL, Node.js. 
                    I want to emphasize that I have done the minor of Information Technologies, in which I studied and worked on several subjects of networks. 
                    Finally, during my final degree project I also learned how to use React.JS to develop a WEB application.
                
                </Col>
            </Row>

            <Row className="subSection" id="dobleSection">
                <Col>
                    <h2 className="subtitleSection">LANGUAGES</h2>
                    <ul>
                        <li> <span className="enfasis2">English: </span> Advance</li>
                        <li> <span className="enfasis2">Spanish: </span> Native</li>
                        <li> <span className="enfasis2">Catalan: </span> Native</li>
                    </ul>
                </Col>
                <Col>
                    <h2 className="subtitleSection">SKILLS</h2>
                    <ul>
                        <li> Easy learning</li>
                        <li> Good team worker</li>
                        <li> Proactive</li>
                        <li> Good Adaptability</li>
                    </ul>
                </Col>
            </Row>

            <Row className="subSection">
                <Col>
                    <h2 className="subtitleSection">WORK EXPERIENCE</h2>

                    <h3><span className="enfasis2">May. 2022 - Current</span> | <span className="enfasis1">Junior Software Engineer</span></h3>
                    <h3><span className="enfasis2">Barcelona, Spain</span> | <span className="enfasis1">Indra Sistemas S.A</span></h3>
                    I am currently working as a Junior Developer Engineer, developing new features, and supporting TMB (Barcelona Metropolitan Transport) systems, which includes a Web, BBDD, Java programs, and C++ programs. 
                    During my time here, I have learned about ASP.NET framework 4 and I have improved my skills with SQL, C++ and JAVA.

                    <h3><span className="enfasis2">Feb. 2020 - May. 2022</span> | <span className="enfasis1">System Engineer</span></h3>
                    <h3><span className="enfasis2">Sant Cugat, Spain</span> | <span className="enfasis1">Brain2Store, IT Infrastructure Consultancy.</span></h3>
                    I started in this company as a trainee System Engineer for 1 year. During this time, my colleagues and my boss saw great aptitudes and attitudes to work with them and decided to hire me. 
                    I worked one year as a System Engineer, supporting customers to solve their problems about NetApp, Commvault, Cisco Switches, Firewalls, Sophos, and many more things about their IT infrastructure.

                    <h3><span className="enfasis1">Will you the next company that hires me?...</span> </h3>
                </Col>
            </Row>
            <Row className="subSection">
                <Col>
                    <h2 className="subtitleSection">TECHNICAL ASPECTS</h2>
                    <h3><span className="enfasis1">I have worked with these technologies during my training as a computer engineer and during the years I have been working.</span> </h3>
                    <ul>
                        <li><span className="enfasis2">Programming: </span> C/C++, Java, ASP.NET framework 4, SQL, Python, PHP.</li>
                        <li><span className="enfasis2">Front-End: </span> JavaScript, React.js, Vue.js.</li>
                        <li><span className="enfasis2">Systems: </span> Linux, Windows, VMware, NetApp, Commvault.</li>
                        <li><span className="enfasis2">Others: </span> Bitbucket, GitHub, SourceTree, Agile Methodology, OOP.</li>
                    </ul>
                </Col>
            </Row>
          
            <Row className="subSection">
                <Col>
                    <h2 className="subtitleSection">CERTIFIED</h2>
                    <ul>
                        <li>Commvault Certified Professional</li>
                        <li>SQL Course Udemy</li>
                    </ul>
                </Col>
            </Row>
        </section>
    </Container>)
}