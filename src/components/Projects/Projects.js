import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../Assets/images/budget calculator.png";
import quiz from "../../Assets/images/quiz.png";
import snake from "../../Assets/images/snake.png";
import todo from "../../Assets/images/todo2.png";
import turo from "../../Assets/images/turo.png";
import tictactoe from "../../Assets/images/tic tac toe.png";
import piano from "../../Assets/images/piano.png";
import oldPortfolio from "../../Assets/images/oldPortfolio.png";
import chat from "../../Assets/images/chat.png";
import todoLocal from "../../Assets/images/todolocal.png";
import breakaway from "../../Assets/images/Breakaway.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={breakaway}
              isBlog={false}
              title="Breakaway.com"
              description="My first biggest project of a website basically it is a new way of sending gifts to your friends and and buying any thing. which i am making for uk client which will run in dubai. The complete website will be controlling by admin dashboard. In the website you can send gifts to your friends it will take your location and destination and will send your gift to your friend We have two types of order category 1) Normal. 2) Company. Normal order is for every one. it will not take your personal data like login and signup and will take your order and will send you by breakaway riders and the company order is for companies if they want anything so that they have to give their personal details for confirmation purpose"
              ghLink="https://github.com/alihuzaifa/Breakaway-Project"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Budget Calculator"
              description="It is a calculator made by react js to manage your budgets. it will help you to calculate the total price of all item which you have save in it. Obviously You can edit it and delete as well. You can also download the list that you have save in it."
              ghLink="https://lnkd.in/deFkK9bR"
              demoLink="https://lnkd.in/dJB4tgWC"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz Application"
              description="It is a quiz application made by react js. basically it is the coding challenge given by my friend to complete it in five hour. you can also check your iq level by competing the challenge of all mcqs. you can check the difficulty level of mcq by rating star on the top of quiz application and at the end it will show your score."
              ghLink="https://github.com/alihuzaifa/Quiz-Application-React"
              demoLink="https://magnificent-friend.surge.sh/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake Game"
              description="I made a beautiful hungry snake game in javascript to boost my mind and also to challenge my friends and relatives. You can also challenge to your friend that who can make the high score because on the top you will see the highest score of game."
              ghLink="https://github.com/alihuzaifa/snake-game"
              demoLink="https://alihuzaifa.github.io/snake-game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo Application"
              description="I made an awesome todo application in which you can save your daily routines and tasks what you have to do today and the great thing is the data which is showing to you will not be removed when you close the website we merge the database init firebase firestore not realtime database because firebase firestore is recommended by Google. and i also integrate login signup with email verification forgot password and logout functionality init"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat Application"
              description="It is a chat application which i have made for our class mates for learning purpose where they can share their coding issues and problems with class friends so that we solve and help our friend in their programming and i also integrate login signup with email verification forgot password and logout functionality init"
              ghLink="https://github.com/alihuzaifa/chat-application-for-class-chatting"
              demoLink="https://alihuzaifa.github.io/chat-application-for-class-chatting/signup/Forget%20Password/Email%20Verification/Chats/chat.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={turo}
              isBlog={false}
              title="Car Booking App Front End Page Ui"
              description="It is a car booking websites turo which i have tried to copy for learning react how it works and how we can make reusable components and how we can use different react libraries to make our app more beautiful because library makes easy our work"
              ghLink="https://github.com/alihuzaifa/Turo-Website-Project"
              demoLink="http://nimble-fuel.surge.sh/"
              // <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oldPortfolio}
              isBlog={false}
              title="Old Portfolio Websites"
              description="My old portfolio website which i have made before according to my teacher instructions and basically it is made by html css and some others cool css libraries with javascipt."
              ghLink="https://github.com/alihuzaifa/My-Portfolio-Website"
              demoLink="https://alihuzaifa.github.io/My-Portfolio-Website/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe Game"
              description="It is my first game which i have created by my own logics when i was learning javascript and ALLHUMDULLILAH i was the first student in the class to complete it. By this game you can fresh your mind which is very important when you are studing and you can also challenge with your friends that who has more iq level."
              ghLink="https://github.com/alihuzaifa/Tic-Tac-Toe"
              demoLink="https://alihuzaifa.github.io/Tic-Tac-Toe/"
              // <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={piano}
              isBlog={false}
              title="Piano"
              description="It is a piano application where you can play with piano and can listen different types of musics and music also helps you to make your mind fresh."
              ghLink="https://github.com/alihuzaifa/Piano"
              demoLink="https://alihuzaifa.github.io/Piano/"
              // <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoLocal}
              isBlog={false}
              title="Piano"
              description="It is my first todo application which i have made using javascript and local storage. because i want when i refresh the screen the data will not removed and if you come after some time to check what i have to do now."
              ghLink="https://github.com/alihuzaifa/todo-app-with-local-stor"
              demoLink="https://alihuzaifa.github.io/todo-app-with-local-stor/"
              // <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
