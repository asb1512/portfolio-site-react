import './App.css';
import React, { useState } from 'react';
import { useTransition, useSpring, animated, config } from 'react-spring'
import Navbar from './Navbar';

import bg from './images/marbre-blanc.jpg';



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



  return transitions(
    (styles, item) => item && <animated.div style={styles} className="App">
      <Navbar />

      <img
        src={bg}
        alt="Andrew Bourgeois – Full-Stack Developer"
        className='home-bg'
      />

      <animated.div className="home-block frosted" style={boxStyle}>
        bringing <span>code</span> to life
      </animated.div>
    </animated.div>
  )
}

export default App;
