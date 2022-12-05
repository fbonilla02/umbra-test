import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { useItem } from '../context/ItemContext';

export default function ImageContainer() {

    const {item, isloading } = useItem()
    const Navigate = useNavigate()
   
    if (isloading) {
        return(
          <Loading/>
        )
      }
 

    return (
    <div className='image-container'>
    {item.map(data =>
        <div className='content' onClick={()=>{Navigate(`/photos/${data.id}`)}} key={data.id}>
            <img  src={data.url}/>
        </div>
    )}
 
    </div>
)
}
