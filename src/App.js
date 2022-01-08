import './App.css';
import React, { useState } from 'react';
import { useTransition, useSpring, animated, config } from 'react-spring'
import Navbar from './Navbar';
import Tagline from './Tagline';
import About from './About';

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

  const [showTagline, setTagline] = useState(true);

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

  const [showAbout, setAbout] = useState(false);
  const renderAbout = () => {
    if (showAbout) {
      console.log("You rendered About")
      return <About />
    } else return null
  }



  return transitions(
    (styles, item) => item && <animated.div style={styles} className="App">
      <Navbar setBgColor={setBgColor} setTagline={setTagline} />

      <Tagline bgColor={bgColor} showTagline={showTagline} setAbout={setAbout} />

      {renderAbout}

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
