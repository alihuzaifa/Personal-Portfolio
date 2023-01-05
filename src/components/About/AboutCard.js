import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ali Huzaifa </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />
            <br />
            A Student who got chance in 2000 student to teach upcoming batch <span className="purple">9</span> of <span className="purple">
              Web and Mobile Modern Application Development</span> For Some Days in <span className="purple">Saylani Welfare International Trust.</span>
            <br />
            <br />
            <span className="purple">Teacher Assistant</span> at Saylani Mass IT Training.
            <br />
            <br />
            <span className="purple">Other Achievements</span><br /><ImPointRight /> HAFIZ QURAN
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
