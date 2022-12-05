import React, { useEffect } from 'react'
import Slide from '../components/Slide'
import { useItem } from '../context/ItemContext';
import ImageContainer from './ImageContainer'
import Loading from '../components/Loading';

export default function Mainpage() {

  const {isloading, loadItems } = useItem()

  useEffect(()=>{
    loadItems()

},[])
    if (isloading) {
        return(
          <Loading/>
        )
      }

  return (
    <>
    <Slide/>
    <ImageContainer/>
    </>
  )
}
