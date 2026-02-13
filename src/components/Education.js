import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "Diploma - Computer Engineering, CGPA:8.77",
      institute: "Vallabh Budhi Polytechnic, Navsari",
      year: "2017 - 2020"
    },
    {
      degree: "Bachelor - Computer Engineering, CGPA: 7.78",
      institute: "Mahatma Gandhi Institute of Technology, Navsari",
      year: "2020 - 2023"
    },
    {
      degree: "Post Diploma - Mobile Application Development, GPA: 4.09",
      institute: "Fanshawe College, London, Canada",
      year: "2024 - 2025"
    }
  ];

  return (
    <section id="education">
      <h2>Education</h2>
      {educationData.map((edu, index) => (
        <div key={index} style={{ 
          marginBottom: '25px', 
          padding: '15px', 
          borderLeft: '4px solid #0070f3', 
          backgroundColor: '#fff', 
          borderRadius: '5px' 
        }}>
          <h3>{edu.degree}</h3>
          <strong>{edu.institute}</strong> <br />
          <em>{edu.year}</em>
        </div>
      ))}
    </section>
  );
};

export default Education;
