import React from 'react'
import './Intro.css'
import {Link} from 'react-scroll';
const bg = '/assets/pp.png'
const btnImg = '/assets/hireme.png'



const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
             <span className='hello'>Hello</span>
             <span className='introText'>I'm <span className='introName'>Priyanshu Mishra</span><br/>Frontend Developer</span>
             <p className='introPara'> 🌟 Aspiring Full Stack Developer | Driven to Learn, 
              Grow, and Contribute 🌟
              {/* I’m enthusiastic about stepping into opportunities where I can learn, collaborate, and make an impact. Let’s connect—I’d love to hear about your experiences and explore ways to contribute to meaningful projects.*/} </p> 
              <Link> <button className='btn'> <img src={btnImg} alt='Hire Me' className='btnImg '/> Hire Me </button></Link>
        </div>
        <img src={bg} alt="Profile" className='bg'/>
    </section>
  )
}

export default Intro