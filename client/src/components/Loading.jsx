import React from 'react'
import Logo from '../assets/logo.png'

export default function Loading() {
    return (
        <div className='loader'>
        <img src={Logo} alt='logo'/>
      </div>
      );
}
