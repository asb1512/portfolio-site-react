import React, { useState } from 'react';
import Hamburger from 'hamburger-react'



export default function Navbar() {

  const [isOpen, setOpen] = useState(false)

  return (
    <div className='navbar frosted-light-unrounded'>
      <div className='navbar-left'>ANDREW BOURGEOIS <span>full-stack developer</span></div>

      <Hamburger toggled={isOpen} toggle={setOpen} className="hamburger" />
    </div>
  )
}
