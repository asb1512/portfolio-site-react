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
  const boxStyle = useSpring({
    width: toggle ? '80%' : '5%',
    height: toggle ? '80%' : '5%',
    opacity: toggle ? 1 : 0,
    config: { delay: 4000 },
  });

  const [showMenu, setMenu] = useState(false);
  const circleMenuStyle = useSpring({
    top: showMenu ? -100 : 0,
    right: showMenu ? -100 : 0,
  })

  return transitions(
    (styles, item) => item && <animated.div style={styles} className="App">
      <Navbar setMenu={setMenu} showMenu={showMenu} />

      <img
        src={bgBlack}
        alt="Andrew Bourgeois – Full-Stack Developer"
        className='home-bg bg-black'
      />

      <img
        src={bgGray}
        alt="Andrew Bourgeois – Full-Stack Developer"
        className='home-bg bg-gray'
      />

      <img
        src={bgRed}
        alt="Andrew Bourgeois – Full-Stack Developer"
        className='home-bg bg-red'
      />

      <img
        src={bgWhite}
        alt="Andrew Bourgeois – Full-Stack Developer"
        className='home-bg bg-white'
      />

      
    </animated.div>
  )
}

export default App;
