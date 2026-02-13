import React from 'react';

const Projects = () => {
  const projects = [
    {
        name: "NASA Explorer (Kotlin Project)",
        description: "An Android app built in Kotlin using NASA APIs to display astronomy pictures, planetary data, and space mission information. Users can explore daily images, learn about planets, and interact with API-driven data.",
        features: [
          "Fetch daily Astronomy Picture of the Day (APOD)",
          "Display planetary data and space mission info",
          "Interactive UI with Kotlin & Jetpack Compose",
          "Offline caching using Room Database",
          "Search and filter functionality"
        ],
        technologies: "Kotlin, Android SDK, Jetpack Compose, Retrofit, Room, NASA APIs",
        link: "https://github.com/Krina1502/NASA-Explorer-APIs-Kotlin-.git" // Add GitHub or Play Store link if available
      },
    {
        name: "SwiftUI Component Project",
        description: "A set of iOS apps and components built with SwiftUI showcasing animations, custom UI elements, and interactive layouts. These projects demonstrate advanced SwiftUI skills and modern iOS design principles.",
        features: [
          "Custom reusable UI components",
          "Interactive lists and forms",
          "Animations and transitions",
          "Dark/Light mode support",
          "Integration with Core Data and APIs"
        ],
        technologies: "Swift, SwiftUI, Xcode, Core Data",
        link: "https://github.com/Krina1502/Swift-UI-Components.git" // Add GitHub link or demo if available
      },
    {
      name: "LifeHub (iOS App)",
      description: "A daily-use iOS app that helps users manage tasks, receive water reminders, view updated news, manage expenses, and get motivational quotes. Built using Swift and integrated with Firebase for real-time notifications and cloud data storage.",
      features: [
        "Task management with reminders",
        "Water intake notifications",
        "Daily news updates",
        "Expense tracking",
        "Motivational quotes"
      ],
      technologies: "Swift, Firebase, iOS SDK",
      link: "https://github.com/keyul-coder/LifeHub.git" // Add App Store/TestFlight link if available
    },
    {
      name: "POS System (JavaScript Project)",
      description: "A Point-of-Sale system built with JavaScript to manage sales, products, and billing. This web app allows small businesses to track daily transactions efficiently and generate invoices for customers.",
      features: [
        "Product management (add, edit, remove items)",
        "Real-time billing and invoice generation",
        "Sales tracking and summary",
        "Searchable product catalog",
        "Responsive design for desktop and tablet"
      ],
      technologies: "JavaScript, HTML, CSS, Local Storage, Firebase",
      link: "https://github.com/smitFanshawe/POS.git" // Add GitHub link if available
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} style={{ 
          marginBottom: '25px', 
          padding: '15px', 
          borderLeft: '4px solid #0070f3', 
          backgroundColor: '#fff', 
          borderRadius: '5px' 
        }}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p><strong>Features:</strong></p>
          <ul>
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <p><strong>Technologies:</strong> {project.technologies}</p>
          {project.link !== "#" && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
        </div>
      ))}
    </section>
  );
};

export default Projects;
