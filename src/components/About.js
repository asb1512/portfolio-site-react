import React, { useState } from 'react';
import './About.css';

import { useTransition, animated, config } from 'react-spring';
import { Scrollbars } from 'react-custom-scrollbars';

import img from '../images/about.png';



export default function About() {

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
    (styles, item) => item && <animated.div style={styles} className='about-cntr'>
      <Scrollbars>
        <h1>about.</h1>

        <p className="about-content">
          Hi, I'm Andrew. I love creating web experiences that are beautiful, functional and reliable.
        </p>

        <p className="about-content">
          Since a young age, I've always had a love for languages. This passion led me to pursue degrees in Linguistics and French & Francophone Studies at the University of Florida and eventually teach English as a second language at 'Portail Rouge', a French middle school in the city of Saint-Etienne.
        </p>

        <p className="about-content">
          Upon returning to the US, I was given to the opportunity to pursue graphic design at digital marketing startup. I grew to love the arts, typography and the importance of simple, elegant design.
        </p>

        <p>Full-stack web development gives me the opportunity to use both, while using critical thinking and problem solving skills to arrive at real-world solutions.</p>

        <div className='about-img-cntr'>
          <img
            src={img}
            alt="Andrew Bourgeois, full-stack developer"
            className='about-img'
          />
        </div>
      </Scrollbars>
    </animated.div>
  )
}
