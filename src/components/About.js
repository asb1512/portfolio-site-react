import React, { useState } from 'react';
import './About.css';

import { useTransition, animated, config } from 'react-spring';

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
      <h1>about.</h1>

      <p>
        Hi, I'm Andrew. I love creating web experiences that are beautiful, functional and reliable.
      </p>

      <p>
        Since a young age, I've always had a love for languages. This passion led me to pursue degrees in Linguistics and French & Francophone Studies at the University of Florida and eventually teach English as a second language at 'Portail Rouge', a French middle school in the city of Saint-Etienne.
      </p>

      <p>
        After my time abroad, I realized that I didn't want to pursue a career in academia and began to search for other opportunities. 
      </p>

      <p>
        After some time, I ended up at a digital marketing startup and quickly fell into graphic design.
      </p>

      <p>
        Isn't it funny that as we age, despite our best efforts, we end up becoming more and more like out parents. My mother, an artist and graphic designer and my father, a teacher.
      </p>

      <div className='about-img-cntr'>
        <img
          src={img}
          alt="Andrew Bourgeois, full-stack developer"
          className='about-img'
        />
      </div>
    </animated.div>
  )
}
