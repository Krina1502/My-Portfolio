import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Android Developer - Intern",
      company: "Otta Box Technology",
      location: "Navsari, India",
      period: "2022",
      description: "Developed Android applications, implemented user interfaces, and ensured smooth app performance."
    },
    {
      role: "Android Developer - Intern",
      company: "Beepixel",
      location: "Navsari, India",
      period: "2023",
      description: "Built Android apps with enhanced features and integrated APIs for seamless user experience."
    },
    {
      role: "Full Stack Developer - Coop",
      company: "Mr Transport",
      location: "Quebec, Canada",
      period: "Sap 2024 - Dec 2024",
      description: "Working on web and mobile applications using React, React Native, and backend technologies to deliver scalable solutions."
    }
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} style={{ marginBottom: '25px', padding: '15px', borderLeft: '4px solid #0070f3', backgroundColor: '#fff', borderRadius: '5px' }}>
          <h3>{exp.role}</h3>
          <strong>{exp.company}</strong> | <em>{exp.location}</em> | <span>{exp.period}</span>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
