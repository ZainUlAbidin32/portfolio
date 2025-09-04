import React from 'react'
import '../components/Footer.css'
import { FaAngleDoubleUp } from 'react-icons/fa'
import { LiaFacebookSquare, LiaInstagram, LiaLinkedin } from 'react-icons/lia'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
  return (
    <div className='footer-container'>
        <div className='footer-top' onClick={scrollTop}>
            <FaAngleDoubleUp color='white'/>
            <h6>BACK TO TOP</h6>
        </div>
        <div className='footer-icons'>
            <a href='https://www.facebook.com/zain.ul.abidin.361784' target='_blank' rel='noopener noreferrer'><LiaFacebookSquare color='white' size={30}/></a>
            <a href='https://www.linkedin.com/in/zain-ul-abidin-453543270/' target='_blank' rel='noopener noreferrer'><LiaLinkedin color='white' size={30}/></a>
            <a href='https://www.instagram.com/iamzain_32/' target='_blank' rel='noopener noreferrer'><LiaInstagram color='white' size={30}/></a>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=iamzain0032@gmail.com' target='_blank' rel='noopener noreferrer'><MdOutlineEmail color='white' size={30}/></a>
        </div>
        <div className='footer-bottom'>
            <p>@2025 Zain Ul Abidin <span>All Rights Reserved.</span></p>
        </div>
    </div>
  )
}

export default Footer
