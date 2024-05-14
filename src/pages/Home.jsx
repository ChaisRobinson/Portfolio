import React from "react";
import faceImage from './face.jpg';


const PortfolioComponent = () => {
  return (
    <div className="homeBox">
      <div className="top">
      <h2 className="about-title">Chais Robinson</h2>
      <h2 className="about-title">Portfolio</h2>
      <div>
      <img className="face" src={faceImage} alt="Portfolio" />
        <p className="about-text">Software Engineer</p>
        <p className="about-text">Full-Stack Web Developer</p>
      </div>
      </div>
      <div className="about">
        <h2 className="about-title">Greetings!</h2>
        <p className="about-text">
          I'm Chais Robinson, a dedicated Software Engineer specializing in
          full-stack web development. I honed my skills at Per Scholas Software
          Engineering program, building a strong foundation for my career. Prior
          to this, I pursued Information Science at the University of
          Pittsburgh, amassing 107 credits with a commendable 3.2 GPA.
        </p>
        <p className="about-text">
          My expertise spans a versatile array of technologies, including HTML,
          CSS, JavaScript, TypeScript, and the MERN stack (MongoDB, Express,
          React, Node.js). I'm adept at utilizing tools like Bootstrap and
          GitHub to streamline development processes. Additionally, I possess
          fundamental proficiency in Java, Python, and SQL.
        </p>

        <p className="about-text">
          I thrive on collaboration and am always eager to connect with fellow
          professionals. If you see potential for synergy or wish to discuss any
          opportunities, I'd love to hear from you.
        </p>
      </div>
    </div>
  );
};

export default PortfolioComponent;
