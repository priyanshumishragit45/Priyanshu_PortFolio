import React from 'react'
import './MyProject.css'
import ProjectCard from '../Card/ProjectCard';
import projectsData from "./projected.json"
const MyProject = () => {

  return (
    <>
     <section id='projects'>
            <h2 className="projectTitle">My Projects</h2>
            <span className="projectDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
            <div className="projectsImgs">
                {projectsData.map((data)=>{
                  return <>
                    <ProjectCard data={data} />
                  </>
                })}
            </div>
            <button className="projectBtn">See More</button>
        </section>
    </>
  )
}

export default MyProject