import React, { useState } from 'react'
import '../components/Contact.css'
import divider from '../images/Divider.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData)
    setFormData({
      name:'',
      email:'',
      phone: '',
      message: '',
    })
    alert('Message Submitted. Demo only no backend yet!')
  }

  return (
    <div id='contact' className='contact-container'>
      <div className='contact-top'>
        <h3>CONTACT</h3>
        <p>I’d love to hear from you! Whether it’s a project idea, collaboration, or just a quick hello, feel free to reach out.</p>
        <img src={divider} alt='Divider Image'/>
      </div>
      <form onSubmit={handleSubmit} className='contact-form'>
        <input type='text' name='name' placeholder='ENTER YOUR NAME*' value={formData.name} onChange={handleChange} required/>
        <input type='email' name='email' placeholder='ENTER YOUR EMAIL*' value={formData.email} onChange={handleChange} required/>
        <input type='tel' name='phone' pattern='[0-9+]{10,15}' placeholder='PHONE NUMBER' value={formData.phone} onChange={handleChange}/>
        <textarea name='message' rows='8' placeholder='YOUR MESSAGE*' value={formData.message} onChange={handleChange}></textarea>
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  )
}

export default Contact
