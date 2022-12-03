import React, { useEffect } from 'react'
import Slide from '../components/Slide'
import { useItem } from '../context/ItemContext';
import ImageContainer from './ImageContainer'
import Logo from '../assets/logo.png'

export default function Mainpage() {

  const {isloading, loadItems } = useItem()

  useEffect(()=>{
    loadItems()

},[])
  
   console.log(isloading);
    if (isloading) {
        return (
          <div className='loader'>
          <img src={Logo} alt='logo'/>
        </div>
        );
      }

  return (
    <>
    <Slide/>
    <ImageContainer/>
    </>
  )
}
