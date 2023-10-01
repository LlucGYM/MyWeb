import React, { useState, useRef, useEffect }from "react";
import { Container, Row, Col } from "react-bootstrap";
import './AboutMe.css'
import {motion} from 'framer-motion/dist/framer-motion'
import TitleSection from "./TitleSection";
import Profile from "./Profile";
import CVbutton from "./CVbutton";
import img from "../images/blob.png";
import TagItem from "./TagItem";


export default function AboutMe () {
    const outerRef = useRef(null);
    const [inViewport, setInViewport] = useState(true);
  
    useEffect(() => {
      const onChange = entries => {
        entries.forEach(entry => {
          if (entry.target === outerRef.current) {
            if (entry.isIntersecting) {
              setInViewport(true);
            } else {
              setInViewport(false);
            }
          }
        });
      };
      const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
      observer.observe(outerRef.current)
    }, [outerRef]);
  
    // Framer motion animations
    const fadeInContainerWithStagger = {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.25,
          type: "tween",
          ease: "easeIn",
          when: "beforeChildren",
          staggerChildren: 0.1
        }
      }
    };
    
    const fadeInUp = {
      hidden: {
        opacity: 0,
        y: 40,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring"
        }
      }
    };



    return (<Container id="aboutMe">
        <section>   
             <TitleSection Title = "ABOUT"/>
            <Row className="introSection">
                <Col>
                    <Profile/>
                </Col>
                <Col id="CVdiv"> 
                    <CVbutton/>
                </Col>
            </Row>

            <Row className="introSection"> 
                <Col>
                <p>Hello! I am Lucas, a  
                <span className="enfasis1"> Computer Engineer </span>
                with more than two years of experience. I have worked as a 
                <span className="enfasis2"> Junior System Engineer </span> in IT Infrastructure 
                Consultancy and now I have been working as a 
                <span className="enfasis2"> Junior Software Engineer </span> in a multinational company 
                since May 2022. I am currently looking for a job where I can find the opportunity to progress as a 
                Computer Engineer and face new challenges, as well as improve my professional skills and gain more 
                experience
                </p>
                </Col>
            </Row>

            <Row className="dobleSection">
                <Col ref={outerRef}>
                {inViewport && (
                    <motion.div
                        variants={fadeInContainerWithStagger}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={fadeInUp}>
                            <h2 className="subtitleSection">LANGUAGES</h2>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <ul>
                                <li><TagItem text1="English: " text2="Intermediate"/></li>
                                <li><TagItem text1="Spanish: " text2="Native"/></li>
                                <li><TagItem text1="Catalan: " text2="Native"/></li>
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
                </Col>
                <Col>
                {inViewport && (
                    <motion.div
                        variants={fadeInContainerWithStagger}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={fadeInUp}>
                            <h2 className="subtitleSection">SKILLS</h2>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <ul>
                                <li><TagItem text2="Easy learning"/></li>
                                <li><TagItem text2="Good team worker"/></li>
                                <li><TagItem text2="Proactive"/></li>
                                <li><TagItem text2="Good Adaptability"/></li>
                            </ul>
                        </motion.div>
                    </motion.div>
                    )}
                </Col>
            </Row>

            <Row className="subSection">
                <Col>
                    <h2 className="subtitleSection">STUDIES</h2>
                    <div className="sectionContent">
                        <h3><span className="enfasis2">2017 - 2021</span> | <span className="enfasis1">Degree in Computer Engineering</span></h3>
                        <h3><span className="enfasis2">Barcelona, Spain</span> | <span className="enfasis1">Universitat Autonoma de Barcelona (UAB)</span></h3>
                        <p>
                        During my degree, I have worked with different programming languages and technologies, including C++, JAVA, PHP, JS, Python, Bash, SQL, Node.js. 
                        I want to emphasize that I have done the minor of Information Technologies, in which I studied and worked on several subjects of networks. 
                        Finally, during my final degree project I also learned how to use React.JS to develop a WEB application.
                        </p>
                    </div>
                </Col>
            </Row>

            <Row className="subSection">
                <Col>
                    <h2 className="subtitleSection">TECHNICAL ASPECTS</h2>
                    <p><span className="enfasis2">I have worked with these technologies during my training as a computer engineer and during the years I have been working.</span> </p>
                        
                    <ul>
                        <li><TagItem text1="Programming:  " text2="C/C++, Java, ASP.NET framework 4, SQL, Python, PHP."/></li>
                        <li><TagItem text1="Front-End: " text2="JavaScript, React.js, Vue.js."/></li>
                        <li><TagItem text1="Systems: " text2="Linux, Windows, VMware, NetApp, Commvault."/></li>
                        <li><TagItem text1="Others: " text2="Bitbucket, GitHub, SourceTree, Agile Methodology, OOP."/></li>
                    </ul>
          
                </Col>
            </Row>

            <Row className="subSection">
                <Col>
                    <h2 className="subtitleSection">WORK EXPERIENCE</h2>
                    <div className="sectionContent">
                        <h3><span className="enfasis2">May. 2022 - Current</span> | <span className="enfasis1">Junior Software Engineer</span></h3>
                        <h3><span className="enfasis2">Barcelona, Spain</span> | <span className="enfasis1">Indra Sistemas S.A</span></h3>
                        <p>
                        I am currently working as a Junior Developer Engineer, developing new features, and supporting TMB (Barcelona Metropolitan Transport) systems, which includes a Web, BBDD, Java programs, and C++ programs. 
                        During my time here, I have learned about ASP.NET framework 4 and I have improved my skills with SQL, C++ and JAVA.
                        </p>   
                    </div>
                    <div className="sectionContent">
                        <h3><span className="enfasis2">Feb. 2020 - May. 2022</span> | <span className="enfasis1">System Engineer</span></h3>
                        <h3><span className="enfasis2">Sant Cugat, Spain</span> | <span className="enfasis1">Brain2Store, IT Infrastructure Consultancy.</span></h3>
                        <p>
                        I started in this company as a trainee System Engineer for 1 year. During this time, my colleagues and my boss saw great aptitudes and attitudes to work with them and decided to hire me. 
                        I worked one year as a System Engineer, supporting customers to solve their problems about NetApp, Commvault, Cisco Switches, Firewalls, Sophos, and many more things about their IT infrastructure.
                        </p>
                    </div>
                    <div className="sectionContent">
                        <h3><span className="enfasis1">Will you the next company that hires me?...</span> </h3>
                    </div>
                </Col>
            </Row>
        
            <Row className="subSection">
                <Col>
                    <motion.div
                        variants={fadeInContainerWithStagger}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={fadeInUp}>
                            <h2 className="subtitleSection">CERTIFIED</h2>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <ul>
                                <li><a href="https://www.credly.com/badges/ed473f6e-27ce-4584-b500-0e7901d9eb06" target="_blank"><TagItem text2="Commvault Certified Professional" img={img}/></a></li>
                                <li><a href="https://www.udemy.com/course/aprende-oracle-sql-desde-cero/" target="_blank"><TagItem text2="SQL Course Udemy"/></a></li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </Col>
            </Row>
        </section>
    </Container>)
}