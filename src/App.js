import './App.css';
import React, { useState } from 'react';
import { useTransition, useSpring, animated, config } from 'react-spring'
import Navbar from './Navbar';

import bgWhite from './images/mountains-white.jpg';
import bgRed from './images/mountains-red.jpg';
import bgGray from './images/mountains-gray.jpg';
import bgBlack from './images/mountains-black.jpg';



function App() {

  const [show, set] = useState(false);
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: show,
    delay: 0,
    config: config.wobbly,
    onRest: () => {
      set(true);
      setToggle(true);
    },
  });

  const [toggle, setToggle] = useState(false);

  const [showMenu, setMenu] = useState(false);

  const [bgColor, setBgColor] = useState('white');
  const whiteStyle = useSpring({
    opacity: bgColor === 'white' ? 1 : 0,
  })
  const redStyle = useSpring({
    opacity: bgColor === 'red' ? 1 : 0,
  })
  const grayStyle = useSpring({
    opacity: bgColor === 'gray' ? 1 : 0,
  })
  const blackStyle = useSpring({
    opacity: bgColor === 'black' ? 1 : 0,
  })
  const nameStyle = useSpring({
    color: bgColor === 'red' ? '#FFF' : '#FE3636',
    
  })
  const taglineStyle = useSpring({
    color: bgColor === 'black' ? '#FFF' : '#000',
  })


  return transitions(
    (styles, item) => item && <animated.div style={styles} className="App">
      <Navbar setMenu={setMenu} showMenu={showMenu} setBgColor={setBgColor} />

      <animated.div className='tagline' style={taglineStyle}>
        Hello, <span>I'm</span> <animated.span style={nameStyle}>Andrew Bourgeois</animated.span><br />
        <animated.span style={nameStyle}>a full-stack developer</animated.span>
      </animated.div>

      <div>
        
      </div>

      <animated.img
        src={bgBlack}
        alt="Andrew Bourgeois – Full-Stack Developer"
        className='home-bg bg-black'
        style={blackStyle}
      />

      <animated.img
        src={bgGray}
        alt="Andrew Bourgeois – Full-Stack Developer"
        className='home-bg bg-gray'
        style={grayStyle}
      />

      <animated.img
        src={bgRed}
        alt="Andrew Bourgeois – Full-Stack Developer"
        className='home-bg bg-red'
        style={redStyle}
      />

      <animated.img
        src={bgWhite}
        alt="Andrew Bourgeois – Full-Stack Developer"
        className='home-bg bg-white'
        style={whiteStyle}
      />

      
    </animated.div>
  )
}

export default App;
