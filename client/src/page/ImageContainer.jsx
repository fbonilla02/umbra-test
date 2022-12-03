import React, { useEffect, useState } from 'react'
import { useItem } from '../context/ItemContext';

export default function ImageContainer() {

    const [openModal, setOpenModal] = useState(false)

    const {item, loadItems} = useItem()
    
    useEffect(()=>{
        loadItems()
    },[])
    
    const handleItem = (id)=>{
        console.log(id);
        setOpenModal(true)
        
    }

    return (
    <div className='image-container'>
    {item.map(data =>
        <div className='content' onClick={()=>{handleItem(data.id)}} key={data.id}>
            <img  src={data.url}/>
        </div>
    )}
 
    </div>
)
}
