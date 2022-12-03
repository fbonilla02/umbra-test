import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useItem } from '../context/ItemContext';
import {VscClose} from 'react-icons/vsc'

export default function Modal() {
  const {getItem, getComments, comments} = useItem()
  const [item, setItem] = useState({})
  const params = useParams()
  const Navigate = useNavigate()
  console.log(params.id);

  useEffect(() => {
    const loadItem = async()=>{
      if(params.id){
        const item = await getItem(params.id)
        
        setItem(item)
      }
    }
    loadItem()
    getComments(params.id)

  }, [])
  console.log(comments);
  return (
    <div className='modal__container'>
    <section className='cross-container'>
      <VscClose className='cross' onClick={()=>{Navigate('/')}}/>
    </section>
      <section className='image_container'>
      <img src={item.url}/>
      </section>
      <section className='comment__container'>
      <h3>Comments</h3>
      {comments.map(com =>
      <div className='comment__info' key={com.id}>
        <p>{com.name}</p>
        <p>{com.email}</p>
        <p>{com.body}</p>
      </div>
      )}
      </section>

    </div>
  )
}
