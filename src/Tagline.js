import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';



export default function Tagline(props) {

  const helloStyle = useSpring({
    color: props.bgColor === 'black' ? '#FFF' : '#000',
    opacity: props ? 1 : 0,
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
  const taglineStyle = useSpring({
    opacity: props.showTagline ? 1 : 0,
    transform: props.showTagline ? 'translate(0px, 0px)' : 'translate(-650px, 0px)',
  })



  return (
    <animated.div className='tagline-cntr' style={{...helloStyle, ...taglineStyle}}>
      <div className='tagline-hello'>Hello,</div>

      <animated.div className='tagline-desc'>
        I'm <animated.span style={{...descSpanStyle, ...nameStyle }}>Andrew Bourgeois</animated.span>
      </animated.div>

      <animated.div className='tagline-subdesc'>
        full-stack <animated.span style={{...descSpanStyle, ...fullStackStyle}}>developer</animated.span>
      </animated.div>
    </animated.div>
  )
}
