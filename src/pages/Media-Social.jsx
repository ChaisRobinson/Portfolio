import React from "react";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/github";
import "react-social-icons/linkedin";

const Mediasocial = () => {
  return (
    <div className="mediasocial">
      <p className="about-text">
        Feel free to connect on LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/chais-robinson-4837572a0/">
          Linkedin.com/in/chais-robinson
        </a>
        <SocialIcon
          url="www.linkedin.com"
          a
          href="https://www.linkedin.com/in/chais-robinson-4837572a0/"
        />
      </p>
      <p className="about-text">
        Feel free to explore my projects and contributions on GitHub:{" "}
        <a href="https://github.com/ChaisRobinson">GitHub.com/ChaisRobinson</a>
        <SocialIcon
          url="www.github.com"
          a
          href="https://github.com/ChaisRobinson"
        />
      </p>
    </div>
  );
};

export default Mediasocial;
