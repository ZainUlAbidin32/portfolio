import React, { useState } from 'react'
import logo from "../images/Navbar-logo.png"
import { Link } from 'react-scroll'
import { FaBars, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa'
import Image from "../images/Image.png"
import "../components/Home.css"
import divider from '../images/Divider.png'
import { LiaGithub, LiaLinkedin } from 'react-icons/lia'

const Home = () => {
    const [isOpen,setIsOpen] = useState(false)

  return (
    <div className='home-container'>
        <div className='navbar-container'>
            <div className='navbar-left'>
                <img src={logo} alt='Logo Image'/>
            </div>
            <div className='navbar-right'>
                <Link to='about' smooth={true} duration={500} spy={true} activeClass='active'>About Me</Link>
                <Link to='skills' smooth={true} duration={500} spy={true} activeClass='active'>Skills</Link>
                <Link to='projects' smooth={true} duration={500} spy={true} activeClass='active'>Projects</Link>
                <Link to='contact' smooth={true} duration={500} spy={true} activeClass='active'>Contact Me</Link>
            </div>

            {/* For Mobile Screens */}

            <div className='hamburger' onClick={()=>setIsOpen(!isOpen)}>
                {isOpen?<FaTimes color='white' size={30}/> : <FaBars color='white' size={30}/>}
            </div>
            {isOpen && (<div className='navbar-right-mobile'>
                <Link to='about' smooth={true} duration={500} spy={true} activeClass='active' onClick={()=> setIsOpen(false)}>About Me</Link>
                <Link to='skills' smooth={true} duration={500} spy={true} activeClass='active' onClick={()=> setIsOpen(false)}>Skills</Link>
                <Link to='projects' smooth={true} duration={500} spy={true} activeClass='active' onClick={()=> setIsOpen(false)}>Projects</Link>
                <Link to='contact' smooth={true} duration={500} spy={true} activeClass='active' onClick={()=> setIsOpen(false)}>Contact Me</Link>
            </div>)}
        </div>
        <div className='main-container'>
            <div className='main-left'>
                <div className='main-left-info'>
                    <h4>Hi, I am</h4>
                    <h2>Zain Ul Abidin</h2>
                    <h6>Front-end Developer</h6>
                </div>
                <div className='main-left-links'>
                    <a href='https://github.com/ZainUlAbidin32' target="_blank" rel='noopener noreferrer'><FaGithub color='black'/></a>
                    <a href='https://www.linkedin.com/in/zain-ul-abidin-453543270/' target="_blank" rel='noopener noreferrer'><FaLinkedin color='black'/></a>
                </div>
            </div>
            {/* For Mobile Screen */}
            <div className='main-content-mobile'>
                <div className='main-content-mobile-top'>
                    <h4>my name is Zain</h4>
                    <h2>I'M A DEVELOPER</h2>
                </div>
                <div className='main-content-mobile-links'>
                    <a href='https://github.com/ZainUlAbidin32' target="_blank" rel='noopener noreferrer'><LiaGithub color='white' size={30}/></a>
                    <a href='https://www.linkedin.com/in/zain-ul-abidin-453543270/' target="_blank" rel='noopener noreferrer'><LiaLinkedin color='white' size={30}/></a>
                </div>
            </div>

            <div className='main-right'>
                <img src={Image} alt="Zain's Image"/>
            </div>
        </div>
    </div>
  )
}

export default Home
