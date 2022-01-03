import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import { useSpring, animated } from 'react-spring';



export default function Navbar(props) {

  const [isOpen, setOpen] = useState(false)
  const hamburgerStyle = useSpring({
    opacity: isOpen ? 1 : 0,
    color: isOpen ? '#fff' : '#000',
  })
  const circleMenuStyle = useSpring({
    top: isOpen ? '0' : '-100',
    right: isOpen ? '0' : '-100',
    width: isOpen ? '35%' : '5%',
    fill: 'url(#grad)'
  })

  return (
    <>
      <div className='navbar'>
        <animated.div className='navbar-left' style={hamburgerStyle}>
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
            <stop offset="0%" stopColor='rgba(70,70,70,.8)' stopOpacity='1' />
            <stop offset="100%" stopColor='rgba(0,0,0,1)' stopOpacity='1'/>
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="50"
          
        />
      </animated.svg>
    </>
  )
}