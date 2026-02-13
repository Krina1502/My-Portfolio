import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';

import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Education />
      <Experience /> 
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
