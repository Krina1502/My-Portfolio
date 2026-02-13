import React from "react";
import "./Skills.css";
import { FaReact, FaNodeJs, FaJsSquare, FaDatabase } from "react-icons/fa";
import './Skills.css';


const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact />, level: 85 },
    { name: "React Native", icon: <FaReact />, level: 80 },
    { name: "Node.js", icon: <FaNodeJs />, level: 75 },
    { name: "JavaScript", icon: <FaJsSquare />, level: 90 },
    { name: "Firebase", icon: <FaDatabase />, level: 70 },
    { name: "SwiftUI", icon: <FaReact />, level: 75 },
    { name: "Kotlin", icon: <FaReact />, level: 80 },
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span>{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
