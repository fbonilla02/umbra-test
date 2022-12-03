import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'

export default function Navbar() {
  const Navigate = useNavigate()

  return (
    <header className='navbar'>
    <img src={Logo} alt='Logo umbra' onClick={()=>{Navigate('/')}}/>
    <div>

    </div>
    </header>
  )
}
