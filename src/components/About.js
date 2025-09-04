import React from "react";
import "../components/About.css";
import divider from "../images/Divider.png";
import { FiPenTool } from "react-icons/fi";
import { FaCode, FaTools } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-top">
        <h3>ABOUT ME</h3>
        <p>
          I’m a passionate web developer who loves turning ideas into modern,
          functional, and user-friendly websites. My approach is centered on
          clean design, strong performance, and creating digital experiences
          that truly matter.
        </p>
      </div>
      <div className="divider">
        <img src={divider} />
      </div>
      <div className="about-bottom">
        <div className="service-row">
          <div className="service">
            <h4>
              <FiPenTool /> DESIGN
            </h4>
            <p>
              I focus on crafting clean, attractive, and intuitive interfaces.
              From color choices to layout, every detail is carefully designed
              to make websites visually appealing and easy to navigate.
            </p>
          </div>
          <div className="service">
            <h4>
              <FaCode /> DEVELOPMENT
            </h4>
            <p>
              I build responsive and efficient websites using the latest web
              technologies. My goal is to ensure seamless functionality across
              devices while maintaining speed, performance, and scalability.
            </p>
          </div>
        </div>
        <div className="service center">
          <h4>
            <FaTools /> MAINTENANCE
          </h4>
          <p>
            Websites need care even after launch. I provide ongoing support,
            updates, and optimizations to keep websites secure, up-to-date, and
            running smoothly.
          </p>
        </div>
      </div>
      <div className="divider">
        <img src={divider} />
      </div>
    </div>
  );
};

export default About;
