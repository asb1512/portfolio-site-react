import React, { useState } from 'react';
import { useTransition, useSpring, animated, config } from 'react-spring';



export default function Tagline(props) {



  const helloStyle = useSpring({
    color: props.bgColor === 'black' ? '#FFF' : '#000',
  })
  const descSpanStyle = useSpring({
    color: props.bgColor === 'red' || props.bgColor === 'gray' ? '#FFF' : '#FE3636',
  })
  const nameStyle = useSpring({
    translateY: 10,
    from: {
      translateY: 0,
    },
  })
  const fullStackStyle = useSpring({
    to: {
      opacity: 1,
    },
    from: {
      opacity: 0,
    },
  })



  return (
    <animated.div className='tagline-cntr' style={helloStyle}>
      <div className='tagline-hello'>Hello,</div>

      <animated.div className='tagline-desc'>
        I'm <animated.span style={{...descSpanStyle, ...nameStyle }}>Andrew Bourgeois</animated.span>
      </animated.div>

      {/* <animated.div className='tagline-desc'>
        I'm a <animated.span style={{...descSpanStyle, ...fullStackStyle}}>full-stack developer</animated.span>
      </animated.div> */}
    </animated.div>
  )
}
