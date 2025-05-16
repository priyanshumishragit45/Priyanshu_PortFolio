import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-scroll';

const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false)
  return (
    <nav className='navbar'>
        <img src="/assets/logoimg.png" alt ="Logo" className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Skills</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
        </div> 
        <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});
        }}>
        <img src="/assets/contact.png" alt="" className='desktopMenuImg'/>Contact Me</button>

        <img src="/assets/menu.png" alt ="Menu" className='mobMenu' onClick={()=>setShowMenu(!false)}/>
        <div className='navMenu' style={{display : showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(!false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(!false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(!false)}>Skills</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(!false)}>Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(!false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar;