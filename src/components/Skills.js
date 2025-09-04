import React from 'react'
import "../components/Skills.css"
import SkillItem from './SkillItem'
import htmlicon from '../images/HTML.png'
import cssicon from '../images/CSS.png'
import jsicon from '../images/JS.png'
import reacticon from '../images/REACT.png'
import bootstrapicon from '../images/BOOTSTRAP.png'
import figmaicon from '../images/FIGMA.png'
import nexticon from '../images/NEXT.png'
import giticon from '../images/GIT.png'
import tailwindicon from '../images/TAILWIND.png'
import englishicon from '../images/ENGLISH.png'
import urduicon from '../images/URDU.png'
import dataicon from '../images/DATASCIENCE.png'

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
        <div className='skills-top'>
            <h3>SKILLS</h3>
        </div>
        <h3>USING NOW:</h3>
        <div className='skills-row'>
          <SkillItem icon={htmlicon} title="HTML5"/>
          <SkillItem icon={cssicon} title="CSS3"/>
          <SkillItem icon={jsicon} title="JAVASCRIPT"/>
          <SkillItem icon={reacticon} title="REACT"/>
          <SkillItem icon={bootstrapicon} title="BOOTSTRAP"/>
          <SkillItem icon={figmaicon} title="FIGMA"/>
        </div>
        <h3>LEARNING:</h3>
        <div className='skills-row'>
          <SkillItem icon={nexticon} title="NEXT JS"/>
          <SkillItem icon={giticon} title="GIT"/>
          <SkillItem icon={tailwindicon} title="TAILWIND CSS"/>
        </div>
        <h3>OTHER SKILLS:</h3>
        <div className='skills-row'>
          <SkillItem icon={englishicon} title="ENGLISH C1"/>
          <SkillItem icon={urduicon} title="URDU NATIVE"/>
          <SkillItem icon={dataicon} title="DATA SCIENCE"/>
        </div>
    </div>
  )
}

export default Skills
