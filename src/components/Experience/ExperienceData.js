import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ExperienceData() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Teaching Assistant</span>{" "}
            <span>Teacher assistant at Saylani Mass It Training.</span>
            <br />
            <br />
            <span className="purple">Internship Experience at</span>{" "}
            <span>
              Entrollics Pakistan LLC where i learned how to work in a particular time and solve the coding problems regarding to project and understand seniors objectives.
            </span>
            <br />
            <br />
            <span className="purple">Internship Experience at</span>{" "}
            <span>
              Saylani Mass It Training where i learned how to write code and how
              to tackle with difficult programming tasks and to solve them with
              cool mindset.
            </span>
            <br />
            <br />
            <span className="purple">Hackathon Experience</span>{" "}
            <span>
              I participated in 12 hours{" "}
              <span className="purple">Hackathon</span> of saylani mass it
              training where i learned more about programming and to complete
              the tasks within given time.
            </span>
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ExperienceData;
