import React from 'react'
import '../components/Projects.css'
import netflix from '../images/Netflix.png'
import gmail from '../images/Gmail.png'
import linkedin from '../images/Linkedin.png'
import movie from '../images/Movie.png'
import agency from '../images/Agency-AI.jpeg'

const Projects = () => {

  const truncateText = (text, maxLength) => {
  if (!text) return "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}
  const projects = [
    {
      image: netflix,
      name: "NetFlix Clone",
      live: "https://zainulabidin32.github.io/netflix-clone/",
      code: "https://github.com/ZainUlAbidin32/netflix-clone",
      desc: "Developed a responsive Netflix clone using HTML, CSS, and React, ensuring a seamless user experience across all devices and screen sizes. Integrated the TMDb API to fetch and display real-time movie data, enhancing functionality and providing dynamic content.",
    },
    {
      image: gmail,
      name: "Gmail Clone",
      live: "https://zainulabidin32.github.io/gmail-clone/",
      code: "https://github.com/ZainUlAbidin32/gmail-clone",
      desc: "Developed a Gmail clone using HTML, CSS, and React, replicating the core functionality of Gmail and similar user interface. Implemented email composition features , allowing users to create and send new emails, enhancing the app’s functionality.",
    },
    {
      image: linkedin,
      name: "Linkedin Clone",
      live: "https://zainulabidin32.github.io/linkedin-clone/",
      code: "https://github.com/ZainUlAbidin32/linkedin-clone",
      desc: "Built a LinkedIn clone using HTML for structure, CSS and Bootstrap for styling, and React.js for a dynamic user interface. Integrated Firebase for backend services, including user authentication, database storage, and real-time functionality.",
    },
    {
      image: movie,
      name: "Movies Rating App",
      live: "https://zainulabidin32.github.io/linkedin-clone/",
      code: "https://zainulabidin32.github.io/movie-app/",
      desc: "Developed a responsive movie information and rating application using HTML, CSS, and Vanilla JavaScript, providing users with an intuitive interface to explore movies. Integrated a free movie API to fetch and display real-time details and ratings, enhancing functionality and delivering dynamic content.",
    },
    {
      image: agency,
      name: "Agency AI",
      live: "https://agency-ai0.netlify.app/",
      code: "https://github.com/ZainUlAbidin32/Agency-AI",
      desc: "Built a modern website frontend using React and Tailwind CSS. The website includes multiple pages such as Home, Services, Our Work, and Contact Us. It is fully responsive across all devices, featuring a clean, modern UI design focused on showcasing agency services and portfolio work with a smooth user experience."
    },
  ];

  return (
    <div id='projects' className='projects-container'>
        <div className='projects-top'>
          <h3>PROJECTS</h3>
        </div>
        <div className='projects-cards'>
          {projects.map((p, i) => (
          <div
            className="project-card"
            key={i}
          >
            <img src={p.image} alt="Project Image"/>
            <h2>{p.name}</h2>
            <p>{truncateText(p.desc,250)}</p>
            <div className="btn-group">
              <a href={p.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={p.code} target="_blank" rel="noreferrer">
                Source Code
              </a>
            </div>
          </div>
        ))}
        </div>
        <div className='projects-bottom'>
          <h4>And many more to come!</h4>
        </div>
    </div>
  )
}

export default Projects
