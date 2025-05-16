import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import Works from './Components/Works/Works';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';
import "./index.css"
import MyProject from './Components/MyProjects/MyProject';
import Card from './Components/Card/Card';
import ProjectCard from './Components/Card/ProjectCard';
function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <MyProject/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
