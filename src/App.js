import './App.css';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import Navbar from './Navbar';

import bg from './images/red-blue-waves.jpg';



function App() {

  return (
    <div className="App">

      <Navbar />

      <img
        src={bg}
        alt="Andrew Bourgeois – Full-Stack Developer"
        className='home-bg'
      />

      <animated.div className='home-bg-blur' />

    </div>
  );
}

export default App;
