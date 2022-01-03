import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import { useSpring, animated } from 'react-spring';



export default function Navbar(props) {

  // animation for hamburger menu
  const [isOpen, setOpen] = useState(false)
  const nameStyle = useSpring({
    opacity: isOpen ? 1 : 0,
    color: isOpen ? '#fff' : '#000',
  })
  const circleMenuStyle = useSpring({
    top: isOpen ? '0' : '-100',
    right: isOpen ? '0' : '-100',
    width: isOpen ? '35%' : '5%',
    fill: 'url(#grad)'
  })
  
  // animation for menu options
  const [hoverAbout, setAbout] = useState(false);
  const [hoverProjects, setProjects] = useState(false);
  const [hoverContacts, setContacts] = useState(false);

  const handleMouseEnter = (color) => {
    switch (color) {
      case 'red':
        setAbout(true);
        break;
      case 'gray':
        setProjects(true);
        break;
      case 'black':
        setContacts(true);
        break;
      default:
        break;
    }
    props.setBgColor(color);
  }

  const handleMouseLeave = () => {
    setAbout(false);
    setProjects(false);
    setContacts(false);
    props.setBgColor('white');
  }

  const aboutStyle = useSpring({
    delay: 300,
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translate(0px, 0px)' : 'translate(0px, 250px)',
    config: {
      mass: 2,
      tension: 350,
      clamp: true,
    },
  })
  const aboutHoverStyle = useSpring({
    color: hoverAbout ? '#FE3636' : '#FFF',
  })

  const projectsStyle = useSpring({
    delay: 400,
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translate(0px, 0px)' : 'translate(0px, 250px)',
    config: {
      mass: 1,
      tension: 350
    },
  })
  const projectsHoverStyle = useSpring({
    color: hoverProjects ? '#BCBCBC' : '#FFF',
  })

  const contactsStyle = useSpring({
    delay: 500,
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translate(0px, 0px)' : 'translate(0px, 250px)',
    config: {
      mass: 2,
      tension: 350
    },
  })
  const contactsHoverStyle = useSpring({
    color: hoverContacts ? '#000' : '#FFF',
  })



  return (
    <>
      <div className='navbar'>
        <animated.div className='navbar-left' style={nameStyle}>
          ANDREW BOURGEOIS <span>full-stack developer</span>
        </animated.div>

        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          onClick={() => props.setMenu(true)}
          className="hamburger"
          color={isOpen ? "#fff" : "#000"}
        />
      </div>

      <animated.svg
        viewBox="-25 25 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className='circle'
        style={circleMenuStyle}
      >
        <defs>
          <linearGradient 
            id="grad" 
            x1="0%" 
            y1="0%" 
            x2="100%" 
            y2="0%"
          >
            <stop offset="0%" stopColor='rgba(70,70,70,.75)' stopOpacity='1' />
            <stop offset="100%" stopColor='rgba(0,0,0,.75)' stopOpacity='1'/>
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="50"
          
        />
      </animated.svg>

      <div className='menu-options'>
        <animated.p 
          style={{...aboutStyle, ...aboutHoverStyle}}
          onMouseEnter={() => handleMouseEnter('red')}
          onMouseLeave={() => handleMouseLeave()}
        >
            about
        </animated.p>
        <animated.p 
          style={{...projectsStyle, ...projectsHoverStyle}}
          onMouseEnter={() => handleMouseEnter('gray')}
          onMouseLeave={() => handleMouseLeave()}
        >
            projects
        </animated.p>
        <animated.p 
          style={{...contactsStyle, ...contactsHoverStyle}}
          onMouseEnter={() => handleMouseEnter('black')}
          onMouseLeave={() => handleMouseLeave()}
        >
            contacts
        </animated.p>
      </div>
    </>
  )
}