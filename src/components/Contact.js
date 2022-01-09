import React, { useState } from 'react';
import './Contact.css';

import { useTransition, animated, config } from 'react-spring';



export default function Contact() {

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
    (styles, item) => item && <animated.div className='contact-cntr'>
      currently under construction...
    </animated.div>
  )
}
