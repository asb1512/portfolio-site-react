import React, { useState } from 'react';
import './Projects.css';

import { useTransition, animated, config } from 'react-spring';



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
        
      </div>
    </animated.div>
  )
}
