import React from 'react'
import './Skills.css'

// import WebDesign from '../../assets/website-design.png'
// import AppDesign from '../../assets/app-design.png'
import Skill from './Skill'
import skillsList from "./skillsList.json"

function Skills(){
    return(
        <>
        <section id='skills'>
            <span className='skillTitle'> What I do</span>
            <span className='skillDesc'>I’m enthusiastic about stepping into opportunities where I can learn, collaborate, and make an impact. Let’s connect—I’d love to hear about your experiences and explore ways to contribute to meaningful projects I’m enthusiastic about stepping into opportunities where I can learn, collaborate, and make an impact. Let’s connect—I’d love to hear about your experiences and explore ways to contribute to meaningful projects
            </span>
            <div className='skillBars'>
              {skillsList.map((skill)=>{
                return <Skill data={skill} />
              })}
               
            </div>
        </section>
        </>
    )
}
export default Skills;