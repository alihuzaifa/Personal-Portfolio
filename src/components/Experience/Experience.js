import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "../About/Github";
import Techstack from "../About/Techstack";
import ExperienceData from "./ExperienceData";
import developerImg from "../../Assets/experience/developer.gif";
import Toolstack from "../About/Toolstack";
import './experience.css'

function Experience() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "flex-end",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <div className="purple">Experience</div>
            </h1>
            <ExperienceData />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={developerImg} alt="experience" className="img-fluid experience" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
