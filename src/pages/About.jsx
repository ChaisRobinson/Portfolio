import React from "react";

const About = () => {
  return (
    <div className="about">
      <h2 className="about-title">Education</h2>
      <p className="about-text" style={{ fontWeight: "bold" }}>
        University of Pittsburgh <br />{" "}
      </p>
      <p className="about-text">
        Information Science <br />
        GPA: 3.2 <br />
        Sep 2010 - Apr 2015 <br />
      </p>
      <p className="about-text" style={{ fontWeight: "bold" }}>
        Per Scholas <br />
      </p>
      <p className="about-text">
        Software Engineering <br />
        GPA: 3.9 <br />
        Feb 2024 - Jun 2024 <br />
      </p>
      <h2 className="about-title">Work Experience</h2>
      <p className="about-text" style={{ fontWeight: "bold" }}>
        Shift Supervisor CVS Health <br />
      </p>
      <p className="about-text">
        Full-time Oct 2023 to Present · 7 mos <br />
        Pittsburgh, Pennsylvania, United States <br />
      </p>
      <p className="about-text" style={{ fontWeight: "bold" }}>
        Assistant Kitchen Manager Condado Tacos <br />
      </p>
      <p className="about-text">
        May 2017 - Oct 2023 · 6 yrs 6 mos <br />
        Pittsburgh, Pennsylvania, United States <br />
      </p>
    </div>
  );
};

export default About;
