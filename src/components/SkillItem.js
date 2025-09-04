import React from 'react'
import '../components/SkillItem.css'

const SkillItem = ({icon,title}) => {
  return (
    <div className='skill-item'>
        <img src={icon} alt='Skill Icon'/>
        <p>{title}</p>
    </div>
  )
}

export default SkillItem