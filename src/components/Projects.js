import React, { useState } from 'react';
import './Projects.css';

import { useTransition, animated, config } from 'react-spring';

import adSize from '../images/adsize.png';
import linguaFranca from '../images/linguafranca.png';
import parkList from '../images/parklist.png';
import wtpWine from '../images/wtpwine.png';



export default function Projects() {

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
    },
  });



  return transitions(
    (styles, item) => item && <animated.div style={styles} className='projects-cntr'>
      <div className='projects-sub-cntr'>
        <img
          src={linguaFranca}
          alt="Lingua Franca: connecting language learners"
          className='project-tile lingua-franca'
        />

        <img
          src={adSize}
          alt="Ad Size: providing easy-to-find dimensions for advertising professionals"
          className='project-tile ad-size' 
        />

        <img
          src={parkList}
          alt="Park List: allowing nature lovers to track their visits in America's national parks"
          className='project-tile park-list'
        />

        <img
          src={wtpWine}
          alt="We The People Wine: drink up! (a work in progress)"
          className='project-tile wtp-wine'
        />
      </div>
    </animated.div>
  )
}
